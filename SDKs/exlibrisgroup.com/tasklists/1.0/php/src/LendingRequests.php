<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class LendingRequests 
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
     * Get Lending Requests
     * 
     * This API returns a list of lending requests in Alma
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsRsLendingRequestsRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsRsLendingRequestsResponse
     */
	public function getAlmawsV1TaskListsRsLendingRequests(
        \OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsRsLendingRequestsRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsRsLendingRequestsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/almaws/v1/task-lists/rs/lending-requests');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsRsLendingRequestsRequest::class, $request, null));
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsRsLendingRequestsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON', 'json');
            }
            if (Utils\Utils::matchContentType($contentType, 'application/xml')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 500) {
        }

        return $response;
    }
	
    /**
     * Act on Lending Requests
     * 
     * This API preforms the requested action on a list (specified by given filters) of lending requests in Alma
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PostAlmawsV1TaskListsRsLendingRequestsRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PostAlmawsV1TaskListsRsLendingRequestsResponse
     */
	public function postAlmawsV1TaskListsRsLendingRequests(
        \OpenAPI\OpenAPI\Models\Operations\PostAlmawsV1TaskListsRsLendingRequestsRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PostAlmawsV1TaskListsRsLendingRequestsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/almaws/v1/task-lists/rs/lending-requests');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PostAlmawsV1TaskListsRsLendingRequestsRequest::class, $request, null));
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostAlmawsV1TaskListsRsLendingRequestsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems', 'json');
            }
            if (Utils\Utils::matchContentType($contentType, 'application/xml')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 500) {
        }

        return $response;
    }
}