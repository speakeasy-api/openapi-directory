<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class SalesInvoiceQueryDto
{
	#[\JMS\Serializer\Annotation\SerializedName('acCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $acCode = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('bookTranTypeId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $bookTranTypeId = null;
    
    /**
     * $customFields
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AcudfValueDto> $customFields
     */
	#[\JMS\Serializer\Annotation\SerializedName('customFields')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AcudfValueDto>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $customFields = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('customerId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $customerId = null;
    
    /**
     * $deliveryTo
     * 
     * @var ?array<string> $deliveryTo
     */
	#[\JMS\Serializer\Annotation\SerializedName('deliveryTo')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $deliveryTo = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('details')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $details = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('entryDate')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $entryDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('netGoods')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $netGoods = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('netServices')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $netServices = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('note')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $note = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ourReference')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ourReference = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('procDate')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $procDate = null;
    
    /**
     * $productTrans
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ProductTranQueryDto> $productTrans
     */
	#[\JMS\Serializer\Annotation\SerializedName('productTrans')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ProductTranQueryDto>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $productTrans = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('quoteId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $quoteId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('reference')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $reference = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('saleRepCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $saleRepCode = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('saleRepId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $saleRepId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('timestamp')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $timestamp = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('total')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $total = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('totalNet')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $totalNet = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('totalVAT')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $totalVAT = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('unpaid')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $unpaid = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('vatTypeId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $vatTypeId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('yourReference')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $yourReference = null;
    
	public function __construct()
	{
		$this->acCode = null;
		$this->bookTranTypeId = null;
		$this->customFields = null;
		$this->customerId = null;
		$this->deliveryTo = null;
		$this->details = null;
		$this->entryDate = null;
		$this->id = null;
		$this->loType = null;
		$this->netGoods = null;
		$this->netServices = null;
		$this->note = null;
		$this->ourReference = null;
		$this->procDate = null;
		$this->productTrans = null;
		$this->quoteId = null;
		$this->reference = null;
		$this->saleRepCode = null;
		$this->saleRepId = null;
		$this->timestamp = null;
		$this->total = null;
		$this->totalNet = null;
		$this->totalVAT = null;
		$this->unpaid = null;
		$this->vatTypeId = null;
		$this->yourReference = null;
	}
}
