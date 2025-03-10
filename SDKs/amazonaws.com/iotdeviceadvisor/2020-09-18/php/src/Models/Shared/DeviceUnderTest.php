<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeviceUnderTest - Information of a test device. A thing ARN or a certificate ARN is required.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeviceUnderTest
{
	#[\JMS\Serializer\Annotation\SerializedName('certificateArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $certificateArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('thingArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $thingArn = null;
    
	public function __construct()
	{
		$this->certificateArn = null;
		$this->thingArn = null;
	}
}
