<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListResourcesAssociatedToCustomLineItemOutput - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListResourcesAssociatedToCustomLineItemOutput
{
	#[\JMS\Serializer\Annotation\SerializedName('Arn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $arn = null;
    
    /**
     * $associatedResources
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ListResourcesAssociatedToCustomLineItemResponseElement> $associatedResources
     */
	#[\JMS\Serializer\Annotation\SerializedName('AssociatedResources')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ListResourcesAssociatedToCustomLineItemResponseElement>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $associatedResources = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->arn = null;
		$this->associatedResources = null;
		$this->nextToken = null;
	}
}
