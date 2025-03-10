<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class InvoiceItemPurchaseDetailsInput
{
    /**
     * Amounts are including tax
     * 
     * @var ?bool $taxInclusive
     */
	#[\JMS\Serializer\Annotation\SerializedName('tax_inclusive')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $taxInclusive = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('tax_rate')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LinkedTaxRateInput $taxRate = null;
    
    /**
     * Description of the unit type the item is sold as, ie: kg, hour.
     * 
     * @var ?string $unitOfMeasure
     */
	#[\JMS\Serializer\Annotation\SerializedName('unit_of_measure')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $unitOfMeasure = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('unit_price')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $unitPrice = null;
    
	public function __construct()
	{
		$this->taxInclusive = null;
		$this->taxRate = null;
		$this->unitOfMeasure = null;
		$this->unitPrice = null;
	}
}
