<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class CustomerServiceMetricTask 
{

	// SDK private variables namespaced with _ to avoid conflicts with API models
	private \GuzzleHttp\ClientInterface $_defaultClient;
	private \GuzzleHttp\ClientInterface $_securityClient;
	private string $_serverUrl;
	private string $_language;
	private string $_sdkVersion;
	private string $_genVersion;	

	/**
	 * @param \GuzzleHttp\ClientInterface $defaultClient
	 * @param \GuzzleHttp\ClientInterface $securityClient
	 * @param string $serverUrl
	 * @param string $language
	 * @param string $sdkVersion
	 * @param string $genVersion
	 */
	public function __construct(\GuzzleHttp\ClientInterface $defaultClient, \GuzzleHttp\ClientInterface $securityClient, string $serverUrl, string $language, string $sdkVersion, string $genVersion)
	{
		$this->_defaultClient = $defaultClient;
		$this->_securityClient = $securityClient;
		$this->_serverUrl = $serverUrl;
		$this->_language = $language;
		$this->_sdkVersion = $sdkVersion;
		$this->_genVersion = $genVersion;
	}
	
    /**
     * <p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href="/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class="tablenote"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href="/api-docs/sell/analytics/resources/methods">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskResponse
     */
	public function createCustomerServiceMetricTask(
        \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/customer_service_metric_task');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "createServiceMetricsTaskRequest", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 202 or $httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 500) {
        }

        return $response;
    }
	
    /**
     * <p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTaskRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTaskSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTaskResponse
     */
	public function getCustomerServiceMetricTask(
        \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTaskRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTaskSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTaskResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/customer_service_metric_task/{task_id}', \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTaskRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTaskResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceMetricsTask = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceMetricsTask', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
        }

        return $response;
    }
	
    /**
     * Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class="tablenote"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTasksRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTasksSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTasksResponse
     */
	public function getCustomerServiceMetricTasks(
        \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTasksRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTasksSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTasksResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/customer_service_metric_task');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTasksRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTasksResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->customerServiceMetricTaskCollection = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CustomerServiceMetricTaskCollection', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 500) {
        }

        return $response;
    }
}