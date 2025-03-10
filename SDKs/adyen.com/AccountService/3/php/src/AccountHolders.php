<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class AccountHolders 
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
     * Close an account holder
     * 
     * Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status), the payments are sent to your liable account.
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\CloseAccountHolderRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\PostCloseAccountHolderSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\PostCloseAccountHolderResponse
     */
	public function postCloseAccountHolder(
        \OpenAPI\OpenAPI\Models\Shared\CloseAccountHolderRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\PostCloseAccountHolderSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\PostCloseAccountHolderResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/closeAccountHolder');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        $options = array_merge_recursive($options, $body);
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostCloseAccountHolderResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 202) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->closeAccountHolderResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CloseAccountHolderResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 422 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Create an account holder
     * 
     * Creates an account holder that [represents the sub-merchant's entity](https://docs.adyen.com/marketplaces-and-platforms/classic/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#legal-entity-types).
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\CreateAccountHolderRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\PostCreateAccountHolderSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\PostCreateAccountHolderResponse
     */
	public function postCreateAccountHolder(
        \OpenAPI\OpenAPI\Models\Shared\CreateAccountHolderRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\PostCreateAccountHolderSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\PostCreateAccountHolderResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/createAccountHolder');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        $options = array_merge_recursive($options, $body);
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostCreateAccountHolderResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->createAccountHolderResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CreateAccountHolderResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 422 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get an account holder
     * 
     * Returns the details of an account holder.
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\GetAccountHolderRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\PostGetAccountHolderSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\PostGetAccountHolderResponse
     */
	public function postGetAccountHolder(
        \OpenAPI\OpenAPI\Models\Shared\GetAccountHolderRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\PostGetAccountHolderSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\PostGetAccountHolderResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/getAccountHolder');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        $options = array_merge_recursive($options, $body);
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostGetAccountHolderResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 202) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getAccountHolderResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\GetAccountHolderResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 422 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get a tax form
     * 
     * Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/marketplaces-and-platforms/classic/tax-forms).
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\GetTaxFormRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\PostGetTaxFormSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\PostGetTaxFormResponse
     */
	public function postGetTaxForm(
        \OpenAPI\OpenAPI\Models\Shared\GetTaxFormRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\PostGetTaxFormSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\PostGetTaxFormResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/getTaxForm');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        $options = array_merge_recursive($options, $body);
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostGetTaxFormResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getTaxFormResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\GetTaxFormResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 422 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Suspend an account holder
     * 
     * Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) to **Suspended**.
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\SuspendAccountHolderRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\PostSuspendAccountHolderSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\PostSuspendAccountHolderResponse
     */
	public function postSuspendAccountHolder(
        \OpenAPI\OpenAPI\Models\Shared\SuspendAccountHolderRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\PostSuspendAccountHolderSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\PostSuspendAccountHolderResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/suspendAccountHolder');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        $options = array_merge_recursive($options, $body);
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostSuspendAccountHolderResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 202) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->suspendAccountHolderResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\SuspendAccountHolderResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 422 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Unsuspend an account holder
     * 
     * Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**. 
     * Account holders can have a **Suspended** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status) if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a verification deadline expires.
     * 
     * You can only unsuspend account holders if they do not have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\UnSuspendAccountHolderRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\PostUnSuspendAccountHolderSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\PostUnSuspendAccountHolderResponse
     */
	public function postUnSuspendAccountHolder(
        \OpenAPI\OpenAPI\Models\Shared\UnSuspendAccountHolderRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\PostUnSuspendAccountHolderSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\PostUnSuspendAccountHolderResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/unSuspendAccountHolder');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        $options = array_merge_recursive($options, $body);
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostUnSuspendAccountHolderResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 202) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->unSuspendAccountHolderResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\UnSuspendAccountHolderResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 422 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Update an account holder
     * 
     * Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.
     * 
     * When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the following object:
     * 
     * * `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes, as well as other existing key-value pairs.
     * 
     * When updating any field in the following objects, you must submit all the fields required for validation:
     * 
     *  * `address`
     * 
     * * `fullPhoneNumber`
     * 
     * * `bankAccountDetails.BankAccountDetail`
     * 
     * * `businessDetails.shareholders.ShareholderContact`
     * 
     *  For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.
     * 
     * To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.
     * 
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\UpdateAccountHolderRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderResponse
     */
	public function postUpdateAccountHolder(
        \OpenAPI\OpenAPI\Models\Shared\UpdateAccountHolderRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/updateAccountHolder');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        $options = array_merge_recursive($options, $body);
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 202) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->updateAccountHolderResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\UpdateAccountHolderResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 422 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Update payout or processing state
     * 
     * Disables or enables the processing or payout state of an account holder.
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\UpdateAccountHolderStateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderStateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderStateResponse
     */
	public function postUpdateAccountHolderState(
        \OpenAPI\OpenAPI\Models\Shared\UpdateAccountHolderStateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderStateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderStateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/updateAccountHolderState');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        $options = array_merge_recursive($options, $body);
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderStateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 202) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getAccountHolderStatusResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\GetAccountHolderStatusResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 422 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
}