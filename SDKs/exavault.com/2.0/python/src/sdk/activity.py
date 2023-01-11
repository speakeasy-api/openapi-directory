import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Activity:
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

    
    def get_session_logs(self, request: operations.GetSessionLogsRequest) -> operations.GetSessionLogsResponse:
        r"""Get activity logs
        Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges. 
        
        **NOTE:** Total Results will always return as 0 to avoid quering data you're not using and stay as performant as possible. 
          
        **Operation Types**
        Session activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:
        
        | File Manager Value | API Value | Notes |
        |-----|----|---|
        | Connect | PASS | |
        | Disconnect | EXIT | |
        | Upload | STOR | |
        | Download | RETR | |
        | Delete | DELE | |
        | Create Folder | MKD | |
        | Rename | RNTO | |
        | Move | MOVE | |
        | Copy | COPY | |
        | Compress | COMPR | |
        | Extract | EXTRACT | |
        | Shared Folders | SHARE | |
        | Send Files | SEND | |
        | Receive Files | RECV | |
        | _N/A_ | EDIT\_SEND | Update send. Not shown in file manager |
        | Update Share | EDIT\_SHARE| | 
        | Update Receive | EDIT\_RECV | |
        | Delete Send | DELE\_SEND | |
        | Delete Receive | DELE\_RECV | |
        | Delete Share | DELE\_SHARE | |
        | Create Notification | NOTIFY | |
        | Update Notification | EDIT\_NTFY| |
        | Delete Notification | DELE\_NTFY | |
        | Create User | USER | |
        | Update User | EDIT\_USER | |
        | Delete User | DELE\_USER | |
        | _N/A_ | DFA | Create direct link. Not shown in file manager |
        | _N/A_ | EDIT\_DFA | Update direct link options. Not shown in file manager |
        | _N/A_ | DELE\_DFA | Deactivate direct link. Not shown in file manager|
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/activity/session"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSessionLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SessionActivityResponse])
                res.session_activity_response = out

        return res

    
    def get_webhook_logs(self, request: operations.GetWebhookLogsRequest) -> operations.GetWebhookLogsResponse:
        r"""Get webhook logs
        Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.
        
        **NOTE:** Total Results will always return as 0 to avoid querying data you're not using and stay as performant as possible. 
        
        **Event Types**
        
        Webhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:
        
        - resources.upload
        - resources.download
        - resources.delete
        - resources.createFolder
        - resources.rename
        - resources.move
        - resources.copy
        - resources.compress
        - resources.extract
        - shares.formSubmit
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/activity/webhooks"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhookLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookActivityResponse])
                res.webhook_activity_response = out

        return res

    