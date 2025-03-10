<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CancelServiceInstanceDeploymentInput
{
	#[\JMS\Serializer\Annotation\SerializedName('serviceInstanceName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $serviceInstanceName;
    
	#[\JMS\Serializer\Annotation\SerializedName('serviceName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $serviceName;
    
	public function __construct()
	{
		$this->serviceInstanceName = "";
		$this->serviceName = "";
	}
}
