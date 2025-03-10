<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateConnectorProfileRequestBodyConnectorProfileConfig -  Defines the connector-specific configuration and credentials for the connector profile. 
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateConnectorProfileRequestBodyConnectorProfileConfig
{
	#[\JMS\Serializer\Annotation\SerializedName('connectorProfileCredentials')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConnectorProfileCredentials')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\ConnectorProfileCredentials $connectorProfileCredentials = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('connectorProfileProperties')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConnectorProfileProperties')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\ConnectorProfileProperties $connectorProfileProperties = null;
    
	public function __construct()
	{
		$this->connectorProfileCredentials = null;
		$this->connectorProfileProperties = null;
	}
}
