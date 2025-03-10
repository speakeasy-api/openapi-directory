<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class PrivateRiddles 
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
     * Create a random Riddle entry.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleResponse
     */
	public function deleteRiddle(
        \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/riddle');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DeleteRiddleRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 401) {
        }

        return $response;
    }
	
    /**
     * Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetRiddleRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetRiddleSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetRiddleResponse
     */
	public function getRiddle(
        \OpenAPI\OpenAPI\Models\Operations\GetRiddleRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetRiddleSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetRiddleResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/riddle');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetRiddleRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetRiddleResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 401) {
        }

        return $response;
    }
	
    /**
     * Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PostRiddleRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\PostRiddleSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\PostRiddleResponse
     */
	public function postRiddle(
        \OpenAPI\OpenAPI\Models\Operations\PostRiddleRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\PostRiddleSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\PostRiddleResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/riddle');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PostRiddleRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostRiddleResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 401) {
        }

        return $response;
    }
	
    /**
     * Create a random Riddle entry.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PutRiddleRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\PutRiddleSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\PutRiddleResponse
     */
	public function putRiddle(
        \OpenAPI\OpenAPI\Models\Operations\PutRiddleRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\PutRiddleSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\PutRiddleResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/riddle');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PutRiddleRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PutRiddleResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 401) {
        }

        return $response;
    }
}