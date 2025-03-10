<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Transactions 
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
     * Get all transactions
     * 
     * Returns all transactions related to a balance account with a payment instrument of type **bankAccount**.
     * 
     * This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetTransactionsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetTransactionsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetTransactionsResponse
     */
	public function getTransactions(
        \OpenAPI\OpenAPI\Models\Operations\GetTransactionsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetTransactionsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetTransactionsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/transactions');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetTransactionsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetTransactionsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->transactionSearchResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\TransactionSearchResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 422 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->restServiceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\RestServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get a transaction
     * 
     * Returns a transaction.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdResponse
     */
	public function getTransactionsId(
        \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/transactions/{id}', \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->transaction = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Transaction', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 422 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->restServiceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\RestServiceError', 'json');
            }
        }

        return $response;
    }
}