<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * TerminalOrder - OK - the request has succeeded.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class TerminalOrder
{
	#[\JMS\Serializer\Annotation\SerializedName('billingEntity')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\BillingEntity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?BillingEntity $billingEntity = null;
    
    /**
     * The merchant-defined purchase order number. This will be printed on the packing list.
     * 
     * @var ?string $customerOrderReference
     */
	#[\JMS\Serializer\Annotation\SerializedName('customerOrderReference')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $customerOrderReference = null;
    
    /**
     * The unique identifier of the order.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * The products included in the order.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\OrderItem> $items
     */
	#[\JMS\Serializer\Annotation\SerializedName('items')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\OrderItem>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $items = null;
    
    /**
     * The date and time that the order was placed, in UTC ISO 8601 format. For example, "2011-12-03T10:15:30Z".
     * 
     * @var ?string $orderDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('orderDate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $orderDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('shippingLocation')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ShippingLocation')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ShippingLocation $shippingLocation = null;
    
    /**
     * The processing status of the order.
     * 
     * @var ?string $status
     */
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $status = null;
    
    /**
     * The URL, provided by the carrier company, where the shipment can be tracked.
     * 
     * @var ?string $trackingUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('trackingUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $trackingUrl = null;
    
	public function __construct()
	{
		$this->billingEntity = null;
		$this->customerOrderReference = null;
		$this->id = null;
		$this->items = null;
		$this->orderDate = null;
		$this->shippingLocation = null;
		$this->status = null;
		$this->trackingUrl = null;
	}
}
