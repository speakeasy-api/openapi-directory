<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateConnectorProfileRequestBody
{
    /**
     * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorProfile</code>. The token is active for 8 hours.</p>
     * 
     * @var ?string $clientToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('clientToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $clientToken = null;
    
    /**
     *  Indicates the connection mode and if it is public or private. 
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorProfileRequestBodyConnectionModeEnum $connectionMode
     */
	#[\JMS\Serializer\Annotation\SerializedName('connectionMode')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\UpdateConnectorProfileRequestBodyConnectionModeEnum>')]
    public UpdateConnectorProfileRequestBodyConnectionModeEnum $connectionMode;
    
    /**
     *  Defines the connector-specific configuration and credentials for the connector profile. 
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorProfileRequestBodyConnectorProfileConfig $connectorProfileConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('connectorProfileConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\UpdateConnectorProfileRequestBodyConnectorProfileConfig')]
    public UpdateConnectorProfileRequestBodyConnectorProfileConfig $connectorProfileConfig;
    
    /**
     *  The name of the connector profile and is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. 
     * 
     * @var string $connectorProfileName
     */
	#[\JMS\Serializer\Annotation\SerializedName('connectorProfileName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $connectorProfileName;
    
	public function __construct()
	{
		$this->clientToken = null;
		$this->connectionMode = \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorProfileRequestBodyConnectionModeEnum::PUBLIC;
		$this->connectorProfileConfig = new \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorProfileRequestBodyConnectorProfileConfig();
		$this->connectorProfileName = "";
	}
}
