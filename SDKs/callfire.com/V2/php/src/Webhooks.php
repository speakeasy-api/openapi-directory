<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Webhooks 
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
     * Create a webhook
     * 
     * Create a Webhook for notification in the CallFire system. Use the webhooks API to receive notifications of important CallFire events. Select the resource to listen to, and then choose the resource events to receive notifications on. When an event triggers, a POST will be made to the callback URL with a payload of notification information. Available resources and their events include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed'], 'MonthlyRenewal': ['failed', 'finished'], 'LowBalance': ['failed', 'finished']. Webhooks support secret token which is used as signing key to HmacSHA1 hash of json payload which is returned in 'X-CallFire-Signature' header. This header can be used to verify callback POST is coming from CallFire. See [security guide](https://developers.callfire.com/security-guide.html)
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\WebhookInput $request
     * @param \OpenAPI\OpenAPI\Models\Operations\CreateWebhookSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\CreateWebhookResponse
     */
	public function createWebhook(
        \OpenAPI\OpenAPI\Models\Shared\WebhookInput $request,
        \OpenAPI\OpenAPI\Models\Operations\CreateWebhookSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\CreateWebhookResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webhooks');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        $options = array_merge_recursive($options, $body);
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\CreateWebhookResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 201) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->resourceId = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ResourceId', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Delete a webhook
     * 
     * Deletes a webhook instance. Will be removed permanently
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookResponse
     */
	public function deleteWebhook(
        \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webhooks/{id}', \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Find webhook resources
     * 
     * Searches for webhook resources. Available resources include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed'], 'MonthlyRenewal': ['failed', 'finished'], 'LowBalance': ['failed', 'finished']
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\FindWebhookResourcesRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\FindWebhookResourcesSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\FindWebhookResourcesResponse
     */
	public function findWebhookResources(
        \OpenAPI\OpenAPI\Models\Operations\FindWebhookResourcesRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\FindWebhookResourcesSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\FindWebhookResourcesResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webhooks/resources');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\FindWebhookResourcesRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\FindWebhookResourcesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->itemListWebhookResource = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ItemListWebhookResource', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Find webhooks
     * 
     * Searches all webhooks available for a current user. Searches by name, resource, event, callback URL, or whether they are enabled. Returns a paged list of Webhooks
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\FindWebhooksRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\FindWebhooksSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\FindWebhooksResponse
     */
	public function findWebhooks(
        \OpenAPI\OpenAPI\Models\Operations\FindWebhooksRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\FindWebhooksSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\FindWebhooksResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webhooks');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\FindWebhooksRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\FindWebhooksResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->webhookPage = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\WebhookPage', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Find a specific webhook
     * 
     * Returns a single Webhook instance for a given webhook id
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetWebhookRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetWebhookSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetWebhookResponse
     */
	public function getWebhook(
        \OpenAPI\OpenAPI\Models\Operations\GetWebhookRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetWebhookSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetWebhookResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webhooks/{id}', \OpenAPI\OpenAPI\Models\Operations\GetWebhookRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetWebhookRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetWebhookResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->webhook = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Webhook', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Find specific webhook resource
     * 
     * Returns information about supported events for a given webhook resource
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceResponse
     */
	public function getWebhookResource(
        \OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webhooks/resources/{resource}', \OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->webhookResource = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\WebhookResource', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Update a webhook
     * 
     * Updates the information in existing webhook
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookResponse
     */
	public function updateWebhook(
        \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webhooks/{id}', \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "webhookInput", "json");
        $options = array_merge_recursive($options, $body);
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponse', 'json');
            }
        }

        return $response;
    }
}