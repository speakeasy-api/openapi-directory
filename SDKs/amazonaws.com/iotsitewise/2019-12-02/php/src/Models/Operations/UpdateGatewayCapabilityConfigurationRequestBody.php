<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateGatewayCapabilityConfigurationRequestBody
{
    /**
     * The JSON document that defines the configuration for the gateway capability. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
     * 
     * @var string $capabilityConfiguration
     */
	#[\JMS\Serializer\Annotation\SerializedName('capabilityConfiguration')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $capabilityConfiguration;
    
    /**
     * The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.
     * 
     * @var string $capabilityNamespace
     */
	#[\JMS\Serializer\Annotation\SerializedName('capabilityNamespace')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $capabilityNamespace;
    
	public function __construct()
	{
		$this->capabilityConfiguration = "";
		$this->capabilityNamespace = "";
	}
}
