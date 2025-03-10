<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2
{
    /**
     * Responsibility for resolving this issue
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy $actionRequiredBy
     */
	#[\JMS\Serializer\Annotation\SerializedName('actionRequiredBy')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy $actionRequiredBy = null;
    
    /**
     * Code, see [status codes](#section/Getting-Started/Status-Codes)
     * 
     * @var string $code
     */
	#[\JMS\Serializer\Annotation\SerializedName('code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $code;
    
	#[\JMS\Serializer\Annotation\SerializedName('detail')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $detail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('detailCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $detailCode;
    
    /**
     * Depricated, use code instead
     * 
     * @var ?int $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $id = null;
    
    /**
     * Depricated, does this status event close the order
     * 
     * @var ?bool $isClosed
     */
	#[\JMS\Serializer\Annotation\SerializedName('isClosed')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isClosed = null;
    
    /**
     * Depricated, use stage/state instead
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Depricated
     * 
     * @var ?string $reason
     */
	#[\JMS\Serializer\Annotation\SerializedName('reason')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $reason = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('stage')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage')]
    public GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage $stage;
    
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State')]
    public GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State $state;
    
	public function __construct()
	{
		$this->actionRequiredBy = null;
		$this->code = "";
		$this->detail = null;
		$this->detailCode = "";
		$this->id = null;
		$this->isClosed = null;
		$this->name = null;
		$this->reason = null;
		$this->stage = new \OpenAPI\OpenAPI\Models\Operations\GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage();
		$this->state = new \OpenAPI\OpenAPI\Models\Operations\GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State();
	}
}
