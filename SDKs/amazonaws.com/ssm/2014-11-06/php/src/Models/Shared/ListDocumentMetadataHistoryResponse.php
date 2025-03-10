<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListDocumentMetadataHistoryResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListDocumentMetadataHistoryResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('Author')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $author = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DocumentVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $documentVersion = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Metadata')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DocumentMetadataResponseInfo')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DocumentMetadataResponseInfo $metadata = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->author = null;
		$this->documentVersion = null;
		$this->metadata = null;
		$this->name = null;
		$this->nextToken = null;
	}
}
