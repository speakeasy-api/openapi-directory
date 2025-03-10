<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel
{
    /**
     * Automatically reduce the NewQuantity by the currently not fulfilled amount
     * 
     * @var ?bool $autosubtractReservedAmount
     */
	#[\JMS\Serializer\Annotation\SerializedName('AutosubtractReservedAmount')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=AutosubtractReservedAmount')]
    public ?bool $autosubtractReservedAmount = null;
    
    /**
     * Optional the ID of the Billbee product to update
     * 
     * @var ?int $billbeeId
     */
	#[\JMS\Serializer\Annotation\SerializedName('BillbeeId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=BillbeeId')]
    public ?int $billbeeId = null;
    
    /**
     * This parameter is currently ignored
     * 
     * @var ?float $deltaQuantity
     */
	#[\JMS\Serializer\Annotation\SerializedName('DeltaQuantity')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=DeltaQuantity')]
    public ?float $deltaQuantity = null;
    
    /**
     * If true, every sent stockchange is stored and transmitted to the connected shop, even if the value has not changed
     * 
     * @var ?bool $forceSendStockToShops
     */
	#[\JMS\Serializer\Annotation\SerializedName('ForceSendStockToShops')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=ForceSendStockToShops')]
    public ?bool $forceSendStockToShops = null;
    
    /**
     * The new absolute stock quantity for the product you want to set
     * 
     * @var ?float $newQuantity
     */
	#[\JMS\Serializer\Annotation\SerializedName('NewQuantity')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=NewQuantity')]
    public ?float $newQuantity = null;
    
    /**
     * This parameter is currently ignored
     * 
     * @var ?float $oldQuantity
     */
	#[\JMS\Serializer\Annotation\SerializedName('OldQuantity')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=OldQuantity')]
    public ?float $oldQuantity = null;
    
    /**
     * Optional a reason text for the stock update
     * 
     * @var ?string $reason
     */
	#[\JMS\Serializer\Annotation\SerializedName('Reason')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=Reason')]
    public ?string $reason = null;
    
    /**
     * The SKU of the product to update
     * 
     * @var ?string $sku
     */
	#[\JMS\Serializer\Annotation\SerializedName('Sku')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=Sku')]
    public ?string $sku = null;
    
    /**
     * Optional the stock id if the feature multi stock is activated
     * 
     * @var ?int $stockId
     */
	#[\JMS\Serializer\Annotation\SerializedName('StockId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=StockId')]
    public ?int $stockId = null;
    
	public function __construct()
	{
		$this->autosubtractReservedAmount = null;
		$this->billbeeId = null;
		$this->deltaQuantity = null;
		$this->forceSendStockToShops = null;
		$this->newQuantity = null;
		$this->oldQuantity = null;
		$this->reason = null;
		$this->sku = null;
		$this->stockId = null;
	}
}
