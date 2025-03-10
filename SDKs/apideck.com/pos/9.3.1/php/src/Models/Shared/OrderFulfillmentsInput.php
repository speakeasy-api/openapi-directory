<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class OrderFulfillmentsInput
{
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('pickup_details')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsInput')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?OrderFulfillmentsPickupDetailsInput $pickupDetails = null;
    
    /**
     * $shipmentDetails
     * 
     * @var ?array<string, mixed> $shipmentDetails
     */
	#[\JMS\Serializer\Annotation\SerializedName('shipment_details')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $shipmentDetails = null;
    
    /**
     * The state of the fulfillment.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsFulfillmentStatusEnum $status
     */
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsFulfillmentStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?OrderFulfillmentsFulfillmentStatusEnum $status = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?OrderFulfillmentsTypeEnum $type = null;
    
	public function __construct()
	{
		$this->id = null;
		$this->pickupDetails = null;
		$this->shipmentDetails = null;
		$this->status = null;
		$this->type = null;
	}
}
