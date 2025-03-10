<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Sns 
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
     * Sns Get
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\SnsGetSnsGetRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\SnsGetSnsGetResponse
     */
	public function snsGetSnsGet(
        \OpenAPI\OpenAPI\Models\Operations\SnsGetSnsGetRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\SnsGetSnsGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/sns');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\SnsGetSnsGetRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\SnsGetSnsGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->snsGetSnsGet200ApplicationJSONAny = $serializer->deserialize((string)$httpResponse->getBody(), 'mixed', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 422) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->httpValidationError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\HTTPValidationError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Sns Post
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\SnsPostSnsPostRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\SnsPostSnsPostResponse
     */
	public function snsPostSnsPost(
        \OpenAPI\OpenAPI\Models\Operations\SnsPostSnsPostRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\SnsPostSnsPostResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/sns');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "snsMessageRequest", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\SnsPostSnsPostResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->snsPostSnsPost200ApplicationJSONAny = $serializer->deserialize((string)$httpResponse->getBody(), 'mixed', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 422) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->httpValidationError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\HTTPValidationError', 'json');
            }
        }

        return $response;
    }
}