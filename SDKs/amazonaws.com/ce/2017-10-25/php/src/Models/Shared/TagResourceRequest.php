<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class TagResourceRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('ResourceArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $resourceArn;
    
    /**
     * $resourceTags
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\ResourceTag> $resourceTags
     */
	#[\JMS\Serializer\Annotation\SerializedName('ResourceTags')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ResourceTag>')]
    public array $resourceTags;
    
	public function __construct()
	{
		$this->resourceArn = "";
		$this->resourceTags = [];
	}
}
