<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ProductError
{
	#[\JMS\Serializer\Annotation\SerializedName('ean')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ean = null;
    
    /**
     * $errors
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\ProductErrorCode> $errors
     */
	#[\JMS\Serializer\Annotation\SerializedName('errors')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ProductErrorCode>')]
    public array $errors;
    
	#[\JMS\Serializer\Annotation\SerializedName('lineNumber')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $lineNumber;
    
	#[\JMS\Serializer\Annotation\SerializedName('mpn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $mpn = null;
    
    /**
     * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. http://schema.org/sku
     * 
     * @var ?string $sku
     */
	#[\JMS\Serializer\Annotation\SerializedName('sku')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sku = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $title = null;
    
	public function __construct()
	{
		$this->ean = null;
		$this->errors = [];
		$this->lineNumber = 0;
		$this->mpn = null;
		$this->sku = null;
		$this->title = null;
	}
}
