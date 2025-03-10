<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateStreamResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateStreamResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('streamArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $streamArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('streamId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $streamId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('streamVersion')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $streamVersion = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->streamArn = null;
		$this->streamId = null;
		$this->streamVersion = null;
	}
}
