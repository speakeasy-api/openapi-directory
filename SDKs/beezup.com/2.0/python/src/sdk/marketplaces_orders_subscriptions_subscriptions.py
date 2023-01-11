import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class MarketplacesOrdersSubscriptionsSubscriptions:
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

    
    def activate_subscription(self, request: operations.ActivateSubscriptionRequest) -> operations.ActivateSubscriptionResponse:
        r"""Activate a subscription to the orders
        At this moment, BeezUP will ensure that your callback url is respecting this specification: 
        - https://app.swaggerhub.com/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/Verification
        
        After that we will send you the orders related to your subscription, respecting this specification: 
        - https://app.swaggerhub.com/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/PushOrders
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/marketplaces/orders/subscriptions/{id}/activate", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivateSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def create_subscription(self, request: operations.CreateSubscriptionRequest) -> operations.CreateSubscriptionResponse:
        r"""Creates a subscription to the orders
        Please take a look at this sequence diagram to understand the subscription process to follow [here](https://www.websequencediagrams.com/files/render?link=SBYbeIc8NGshk6ooCbmjoBLIMl4fIGO1xjJbPBQAglBo0n6BwEReh7NXQiPSjOTX)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/marketplaces/orders/subscriptions/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def deactivate_subscription(self, request: operations.DeactivateSubscriptionRequest) -> operations.DeactivateSubscriptionResponse:
        r"""Deactivate a subscription to the orders
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/marketplaces/orders/subscriptions/{id}/deactivate", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeactivateSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def delete_subscription(self, request: operations.DeleteSubscriptionRequest) -> operations.DeleteSubscriptionResponse:
        r"""Delete a subscription to the orders
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/marketplaces/orders/subscriptions/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def get_subscription(self, request: operations.GetSubscriptionRequest) -> operations.GetSubscriptionResponse:
        r"""Get a subscription to the orders
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/marketplaces/orders/subscriptions/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionIndex])
                res.subscription_index = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def get_subscription_list(self) -> operations.GetSubscriptionListResponse:
        r"""Get the subscription list
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/marketplaces/orders/subscriptions/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SubscriptionIndex]])
                res.subscription_indices = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def get_subscription_push_reporting(self, request: operations.GetSubscriptionPushReportingRequest) -> operations.GetSubscriptionPushReportingResponse:
        r"""Get the push reporting related to this subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/marketplaces/orders/subscriptions/{id}/reporting", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionPushReportingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SubscriptionPushReporting]])
                res.subscription_push_reportings = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def retry_push_orders(self, request: operations.RetryPushOrdersRequest) -> operations.RetryPushOrdersResponse:
        r"""Force retry push orders immediatly
        In case your subscription consumption is unavailable and your subscription is still active you can ask to retry immediatly to push orders instead of waiting the next scheduled retry date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/marketplaces/orders/subscriptions/{id}/retry", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetryPushOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    