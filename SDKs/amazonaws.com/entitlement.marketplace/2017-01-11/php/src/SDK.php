<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

/**
 * SDK - <fullname>AWS Marketplace Entitlement Service</fullname> <p>This reference provides descriptions of the AWS Marketplace Entitlement Service API.</p> <p>AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.</p> <p> <b>Getting Entitlement Records</b> </p> <ul> <li> <p> <i>GetEntitlements</i>- Gets the entitlements for a Marketplace product.</p> </li> </ul>
 * 
 * https://docs.aws.amazon.com/marketplace/ - Amazon Web Services documentation
 * 
 * @package OpenAPI\OpenAPI
 * @access public
 * @see https://docs.aws.amazon.com/marketplace/
 */
class SDK
{
	public const SERVERS = [
        /** The AWS Marketplace Entitlement Service multi-region endpoint */
		'http://entitlement.marketplace.{region}.amazonaws.com',
        /** The AWS Marketplace Entitlement Service multi-region endpoint */
		'https://entitlement.marketplace.{region}.amazonaws.com',
        /** The AWS Marketplace Entitlement Service endpoint for China (Beijing) and China (Ningxia) */
		'http://entitlement.marketplace.{region}.amazonaws.com.cn',
        /** The AWS Marketplace Entitlement Service endpoint for China (Beijing) and China (Ningxia) */
		'https://entitlement.marketplace.{region}.amazonaws.com.cn',
	];
  		
	// SDK private variables namespaced with _ to avoid conflicts with API models
	private ?\GuzzleHttp\ClientInterface $_defaultClient;
	private ?\GuzzleHttp\ClientInterface $_securityClient;
	private ?Models\Shared\Security $_security;
	private string $_serverUrl;
	private string $_language = 'php';
	private string $_sdkVersion = '0.0.1';
	private string $_genVersion = 'internal';

	/**
	 * Returns a new instance of the SDK builder used to configure and create the SDK instance.
	 * 
	 * @return SDKBuilder
	 */
	public static function builder(): SDKBuilder
	{
		return new SDKBuilder();
	}

	/**
	 * @param \GuzzleHttp\ClientInterface|null $client	 
	 * @param Models\Shared\Security|null $security
	 * @param string $serverUrl
	 * @param array<string, string>|null $params
	 */
	public function __construct(?\GuzzleHttp\ClientInterface $client, ?Models\Shared\Security $security, string $serverUrl, ?array $params)
	{
		$this->_defaultClient = $client;
		
		if ($this->_defaultClient === null) {
			$this->_defaultClient = new \GuzzleHttp\Client([
				'timeout' => 60,
			]);
		}

		$this->_securityClient = null;
		if ($security !== null) {
			$this->_security = $security;
			$this->_securityClient = Utils\Utils::configureSecurityClient($this->_defaultClient, $this->_security);
		}
		
		if ($this->_securityClient === null) {
			$this->_securityClient = $this->_defaultClient;
		}

		if (!empty($serverUrl)) {
			$this->_serverUrl = Utils\Utils::templateUrl($serverUrl, $params);
		}
		
		if (empty($this->_serverUrl)) {
			$this->_serverUrl = $this::SERVERS[0];
		}
	}
	
    /**
     * GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsResponse
     */
	public function getEntitlements(
        \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/#X-Amz-Target=AWSMPEntitlementService.GetEntitlements');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "getEntitlementsRequest", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getEntitlementsResult = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\GetEntitlementsResult', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 480) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->invalidParameterException = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\InvalidParameterException', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 481) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->throttlingException = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ThrottlingException', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 482) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->internalServiceErrorException = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\InternalServiceErrorException', 'json');
            }
        }

        return $response;
    }
}