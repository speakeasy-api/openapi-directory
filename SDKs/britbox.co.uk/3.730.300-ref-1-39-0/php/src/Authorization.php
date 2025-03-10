<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Authorization 
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
     * Get a generated device authorization code.
     * 
     * This is the first step in the process of authorizing a device by pin code.
     * The device will make a request to this endpoint providing a unique identifier
     * for the device such as a serial number. This endpoint will then return a
     * generated code which is tied to the given device.
     * 
     * The code may subsequently be used to authorize the device to sign in to an
     * account via the `/account/devices/authorization` endpoint. Typically this
     * will be from a page presented in the web app under the account section.
     * 
     * Once authorized, the device will then be able to sign in to that account
     * via the `/authorization/device` endpoint, without needing to provide the 
     * credentials of the user.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GenerateDeviceAuthorizationCodeRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GenerateDeviceAuthorizationCodeResponse
     */
	public function generateDeviceAuthorizationCode(
        \OpenAPI\OpenAPI\Models\Operations\GenerateDeviceAuthorizationCodeRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GenerateDeviceAuthorizationCodeResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/authorization/device/code');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "deviceRegistrationRequest", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GenerateDeviceAuthorizationCodeRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GenerateDeviceAuthorizationCodeResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->deviceAuthorizationCode = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\DeviceAuthorizationCode', 'json');
            }
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Request one or more `Account` level authorization tokens each with a chosen scope.
     * 
     * Tokens are used to access restricted service endpoints. These restricted endpoints
     * will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
     * before access is granted.
     * 
     * For convenience, where a Profile level token with the same scope exists it will also be returned.
     * 
     * Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
     * endpoint instead.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenResponse
     */
	public function getAccountToken(
        \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/authorization');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "accountTokenRequest", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetAccountTokenRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->accessTokens = $serializer->deserialize((string)$httpResponse->getBody(), 'array<OpenAPI\OpenAPI\Models\Shared\AccessToken>', 'json');
            }
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get Catalog tokens for an account using a device authorization code.
     * Where a Profile level token of Catalog scope exists it will also be returned.
     * 
     * This is the final step in the process of authorizing a device by pin code.
     * 
     * Firstly the device must request a generated authorization code via the
     * `/authorization/device/code` endpoint.
     * 
     * The code is subsequently used to authorize the device to sign in to a given
     * account via the `/account/devices/authorization` endpoint. Typically this
     * will be from a page presented in the web app under the account section.
     * 
     * Once authorized, this endpoint will allow the device to sign in without
     * needing to provide the credentials of the user.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenByCodeRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenByCodeResponse
     */
	public function getAccountTokenByCode(
        \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenByCodeRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenByCodeResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/authorization/device');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "accountTokenByCodeRequest", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetAccountTokenByCodeRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenByCodeResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->accessTokens = $serializer->deserialize((string)$httpResponse->getBody(), 'array<OpenAPI\OpenAPI\Models\Shared\AccessToken>', 'json');
            }
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Request one or more `Profile` level authorization tokens each with a chosen scope.
     * 
     * Tokens are used to access restricted service endpoints. These restriced endpoints
     * will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
     * before access is granted.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetProfileTokenRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetProfileTokenSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetProfileTokenResponse
     */
	public function getProfileToken(
        \OpenAPI\OpenAPI\Models\Operations\GetProfileTokenRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetProfileTokenSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetProfileTokenResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/authorization/profile');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "profileTokenRequest", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetProfileTokenRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetProfileTokenResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->accessTokens = $serializer->deserialize((string)$httpResponse->getBody(), 'array<OpenAPI\OpenAPI\Models\Shared\AccessToken>', 'json');
            }
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Refresh an account or profile level authorization token which is marked as refreshable.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\RefreshTokenRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\RefreshTokenResponse
     */
	public function refreshToken(
        \OpenAPI\OpenAPI\Models\Operations\RefreshTokenRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\RefreshTokenResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/authorization/refresh');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "tokenRefreshRequest", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\RefreshTokenRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\RefreshTokenResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->accessToken = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\AccessToken', 'json');
            }
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * When a user signs out of an application we need to clear some
     * basic cookies we assigned them during token authorization.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\SignOutRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\SignOutResponse
     */
	public function signOut(
        \OpenAPI\OpenAPI\Models\Operations\SignOutRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\SignOutResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/authorization');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\SignOutRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\SignOutResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 204) {
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Exchange a third party single-sign-on token for our own authorization tokens.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\SingleSignOnRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\SingleSignOnResponse
     */
	public function singleSignOn(
        \OpenAPI\OpenAPI\Models\Operations\SingleSignOnRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\SingleSignOnResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/authorization/sso');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "singleSignOnRequest", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\SingleSignOnRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\SingleSignOnResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->accessTokens = $serializer->deserialize((string)$httpResponse->getBody(), 'array<OpenAPI\OpenAPI\Models\Shared\AccessToken>', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceError', 'json');
            }
        }

        return $response;
    }
}