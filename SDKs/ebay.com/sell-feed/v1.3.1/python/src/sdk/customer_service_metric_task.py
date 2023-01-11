import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CustomerServiceMetricTask:
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

    
    def create_customer_service_metric_task(self, request: operations.CreateCustomerServiceMetricTaskRequest) -> operations.CreateCustomerServiceMetricTaskResponse:
        r"""Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the feedType and filterCriteria including both evaluationMarketplaceId and customerServiceMetricType for the report. The method returns the location response header containing the call URI to use with getCustomerServiceMetricTask to retrieve status and details on the task. Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the getCustomerServiceMetric method document in the Analytics API for more information about these two types of reports. Note: Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling getCustomerServiceMetric (part of the Analytics API). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a customerServiceMetricType and evaluationMarketplaceId that are without evaluation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/customer_service_metric_task"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomerServiceMetricTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_customer_service_metric_task(self, request: operations.GetCustomerServiceMetricTaskRequest) -> operations.GetCustomerServiceMetricTaskResponse:
        r"""Use this method to retrieve customer service metric task details for the specified task. The input is task_id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customer_service_metric_task/{task_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomerServiceMetricTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceMetricsTask])
                res.service_metrics_task = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_customer_service_metric_tasks(self, request: operations.GetCustomerServiceMetricTasksRequest) -> operations.GetCustomerServiceMetricTasksResponse:
        r"""Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. Note: You can pass in either the look_back_days or date_range, but not both.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/customer_service_metric_task"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomerServiceMetricTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerServiceMetricTaskCollection])
                res.customer_service_metric_task_collection = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    