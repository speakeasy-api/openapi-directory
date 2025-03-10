<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class TestGetDeviceSetOfUserDeviceSetDeviceConfigurations
{
    /**
     * The unique id of the device configuration
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('image')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\TestGetDeviceSetOfUserDeviceSetDeviceConfigurationsImage')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TestGetDeviceSetOfUserDeviceSetDeviceConfigurationsImage $image = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('model')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\TestGetDeviceSetOfUserDeviceSetDeviceConfigurationsModel')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TestGetDeviceSetOfUserDeviceSetDeviceConfigurationsModel $model = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('os')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $os = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('osName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $osName = null;
    
	public function __construct()
	{
		$this->id = null;
		$this->image = null;
		$this->model = null;
		$this->os = null;
		$this->osName = null;
	}
}
