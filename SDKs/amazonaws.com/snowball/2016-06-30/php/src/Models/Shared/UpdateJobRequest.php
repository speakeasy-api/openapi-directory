<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class UpdateJobRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('AddressId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $addressId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ForwardingAddressId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $forwardingAddressId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('JobId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $jobId;
    
	#[\JMS\Serializer\Annotation\SerializedName('Notification')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Notification')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Notification $notification = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('OnDeviceServiceConfiguration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OnDeviceServiceConfiguration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?OnDeviceServiceConfiguration $onDeviceServiceConfiguration = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Resources')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\JobResource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?JobResource $resources = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RoleARN')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $roleARN = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ShippingOption')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ShippingOptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ShippingOptionEnum $shippingOption = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SnowballCapacityPreference')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\SnowballCapacityEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SnowballCapacityEnum $snowballCapacityPreference = null;
    
	public function __construct()
	{
		$this->addressId = null;
		$this->description = null;
		$this->forwardingAddressId = null;
		$this->jobId = "";
		$this->notification = null;
		$this->onDeviceServiceConfiguration = null;
		$this->resources = null;
		$this->roleARN = null;
		$this->shippingOption = null;
		$this->snowballCapacityPreference = null;
	}
}
