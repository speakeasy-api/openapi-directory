<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class BillbeeInterfacesBillbeeAPIModelInvoiceAPIPositionAPIModel
{
	#[\JMS\Serializer\Annotation\SerializedName('Amount')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $amount = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ArticleBillbeeId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $articleBillbeeId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('BillbeeId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $billbeeId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('GrossValue')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $grossValue = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NetValue')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $netValue = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Position')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $position = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RebatePercent')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $rebatePercent = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Sku')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sku = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $title = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TotalGrossValue')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $totalGrossValue = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TotalNetValue')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $totalNetValue = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TotalVatAmount')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $totalVatAmount = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VatRate')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $vatRate = null;
    
	public function __construct()
	{
		$this->amount = null;
		$this->articleBillbeeId = null;
		$this->billbeeId = null;
		$this->grossValue = null;
		$this->netValue = null;
		$this->position = null;
		$this->rebatePercent = null;
		$this->sku = null;
		$this->title = null;
		$this->totalGrossValue = null;
		$this->totalNetValue = null;
		$this->totalVatAmount = null;
		$this->vatRate = null;
	}
}
