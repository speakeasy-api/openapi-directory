<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListDevicePoolsRequest - Represents the result of a list device pools request.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListDevicePoolsRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('arn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $arn;
    
	#[\JMS\Serializer\Annotation\SerializedName('nextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DevicePoolTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DevicePoolTypeEnum $type = null;
    
	public function __construct()
	{
		$this->arn = "";
		$this->nextToken = null;
		$this->type = null;
	}
}
