import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Webhooks:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_webhooks_id_(self, request: operations.DeleteWebhooksIDRequest) -> operations.DeleteWebhooksIDResponse:
        r"""Delete a webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_webhooks(self, request: operations.GetWebhooksRequest) -> operations.GetWebhooksResponse:
        r"""List webhooks
        Contains a list of your webhooks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Webhook]])
                res.webhooks = out

        return res

    
    def get_webhooks_id_(self, request: operations.GetWebhooksIDRequest) -> operations.GetWebhooksIDResponse:
        r"""Read a webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_webhooks(self, request: operations.PostWebhooksRequest) -> operations.PostWebhooksResponse:
        r"""Create a webhook
        A webhook is an URL that you can register when you want the BulkSMS system to notify you about your messages.
        You can register multiple webhooks, and each one will be called.  (Note: you can also use our [Web App](https://www.bulksms.com/account/#!/advanced-settings/webhooks) to manage your webhooks interactively.)  
        If you want to be notified of `SENT` messages and `RECEIVED` messages you need to create two webhooks.
        
        ### Implementing your webhook
        
        Code samples of Webhook implementations:
        * [PHP](samples/webhook-php.html)
        
        When you implement your webhook, there are a few rules to be aware of:
        - Your webhook must process `POST` requests that contains an array of messages in the post body.  This input given to your webhook has the same structure as the output produced when you call [Retrieve Messages](#tag/Message%2Fpaths%2F~1messages%2Fget).
        - When you register or update your webhook, the URL will be tested by invoking it with an empty array (`[]`).
        - It is possible for your webhook to receive multiple updates for the same message and status. It happens from time to time that the mobile network duplicates status updates.
        - The order by which the webhook is invoked can be unexpected.  For example, if sender A replies before sender B, your webhook might get the reply from B first.
        - The webhook is expected to comply with good practices with regard to the status code it responds with.
          - A status code in the `1xx` and `2xx` range is taken as an acknowledgement that the invocation was received and that the webhook host is ready to receive another.
          - A status code in the `4xx` range is taken as a permanent problem and indicates that the webhook cannot process the message. The specific message that caused the error will be discarded, but your webhook will be invoked again when another message becomes available.
          - Any other status code will be taken as a temporary problem; and indicates that the BulkSMS system should retry. The specific message that caused the error will not be discarded and your webhook will be invoked again with this message (see the subsequent section for more details on retry processing).
        - Your webhook has to respond within `30` seconds.  If no response is given in this time, the invocation will be retried.
        - It is good idea to add a secret to your URL in order to make it more secure. Here is an example:
        `https://www.example.com/hook.php?secret=pass763265word`
        - You can use a non-standard port if necessary, for example: `https://www.example.com:8321/hook.php?secret=pass763265word`
        
        
        ### The retry process
        
        The process the BulkSMS systems follow to handle retries is roughly the following:
        - The first retry is scheduled for 90 seconds into the future.
        - After the first retry, subsequent failures will have longer delays, following this sequence - 3 minutes, 6 minutes, 12 minutes thereafter the message will be retried every 15 minutes for a 2 day period.
        - When all retries fail, the message will be discarded.
        
        ### Problem reports via email
        
        Your are strongly advised to provide an email address when you register your webhook.
        An notice will be sent to this email address to keep you in the loop whenever there are problems with your webhook.
        In order to prevent your inbox from being flooded, the system sends a notice about an observed error no more than once in a 24 hour period.
        
        The following emails can be expected
         - A __message retrying__ email is sent after an invocation has failed with a retry-able error.  This email is an early warning, allowing you to investigate your systems.
         - A __message discarded__ email is sent after failure email is send when a message is discarded as a consequence of a non-retry-able error.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_webhooks_id_(self, request: operations.PostWebhooksIDRequest) -> operations.PostWebhooksIDResponse:
        r"""Update a webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    