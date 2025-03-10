<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Categories 
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
     * Get suggested and/or confirmed category for a specific account
     * 
     * Get category for specific nominal account.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetAccountCategoryRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetAccountCategoryResponse
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
	public function getAccountCategory(
        \OpenAPI\OpenAPI\Models\Operations\GetAccountCategoryRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetAccountCategoryResponse
    {
        trigger_error('Method ' . __METHOD__ . ' is deprecated', E_USER_DEPRECATED);
        
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories', \OpenAPI\OpenAPI\Models\Operations\GetAccountCategoryRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetAccountCategoryResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->categorisedAccount = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CategorisedAccount', 'json');
            }
        }

        return $response;
    }
	
    /**
     * List suggested and confirmed account categories
     * 
     * Lists suggested and confirmed chart of account categories for the given company and data connection.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ListAccountsCategoriesRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\ListAccountsCategoriesResponse
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
	public function listAccountsCategories(
        \OpenAPI\OpenAPI\Models\Operations\ListAccountsCategoriesRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\ListAccountsCategoriesResponse
    {
        trigger_error('Method ' . __METHOD__ . ' is deprecated', E_USER_DEPRECATED);
        
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories', \OpenAPI\OpenAPI\Models\Operations\ListAccountsCategoriesRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ListAccountsCategoriesRequest::class, $request, null));
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ListAccountsCategoriesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->categorisedAccounts = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CategorisedAccounts', 'json');
            }
        }

        return $response;
    }
	
    /**
     * List account categories
     * 
     * Lists available account categories Codat's categorisation engine can provide. 
     * 
     * @return \OpenAPI\OpenAPI\Models\Operations\ListAvailableAccountCategoriesResponse
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
	public function listAvailableAccountCategories(
    ): \OpenAPI\OpenAPI\Models\Operations\ListAvailableAccountCategoriesResponse
    {
        trigger_error('Method ' . __METHOD__ . ' is deprecated', E_USER_DEPRECATED);
        
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/data/assess/accounts/categories');
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ListAvailableAccountCategoriesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->categories = $serializer->deserialize((string)$httpResponse->getBody(), 'array<OpenAPI\OpenAPI\Models\Shared\Categories>', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Patch account categories
     * 
     * Update category for a specific nominal account
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\UpdateAccountCategoryRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\UpdateAccountCategoryResponse
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
	public function updateAccountCategory(
        \OpenAPI\OpenAPI\Models\Operations\UpdateAccountCategoryRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\UpdateAccountCategoryResponse
    {
        trigger_error('Method ' . __METHOD__ . ' is deprecated', E_USER_DEPRECATED);
        
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories', \OpenAPI\OpenAPI\Models\Operations\UpdateAccountCategoryRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "confirmCategory", "json");
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('PATCH', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\UpdateAccountCategoryResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->categorisedAccount = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CategorisedAccount', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Confirm categories for accounts
     * 
     * Comfirms the categories for all or a batch of accounts for a specific connection.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\UpdateAccountsCategoriesRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\UpdateAccountsCategoriesResponse
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
	public function updateAccountsCategories(
        \OpenAPI\OpenAPI\Models\Operations\UpdateAccountsCategoriesRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\UpdateAccountsCategoriesResponse
    {
        trigger_error('Method ' . __METHOD__ . ' is deprecated', E_USER_DEPRECATED);
        
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories', \OpenAPI\OpenAPI\Models\Operations\UpdateAccountsCategoriesRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "confirmCategories", "json");
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('PATCH', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\UpdateAccountsCategoriesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->categorisedAccounts = $serializer->deserialize((string)$httpResponse->getBody(), 'array<OpenAPI\OpenAPI\Models\Shared\CategorisedAccount>', 'json');
            }
        }

        return $response;
    }
}