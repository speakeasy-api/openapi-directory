<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListTagsForResourceOutput - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListTagsForResourceOutput
{
	#[\JMS\Serializer\Annotation\SerializedName('ResourceArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resourceArn = null;
    
    /**
     * $tags
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Tag> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('Tags')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Tag>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
	public function __construct()
	{
		$this->resourceArn = null;
		$this->tags = null;
	}
}
