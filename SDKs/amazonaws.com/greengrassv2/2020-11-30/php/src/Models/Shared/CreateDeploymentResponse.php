<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateDeploymentResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateDeploymentResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('deploymentId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $deploymentId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('iotJobArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $iotJobArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('iotJobId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $iotJobId = null;
    
	public function __construct()
	{
		$this->deploymentId = null;
		$this->iotJobArn = null;
		$this->iotJobId = null;
	}
}
