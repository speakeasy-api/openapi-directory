<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class UpdateFleetRequest
{
    /**
     * $attributesToDelete
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\FleetAttributeEnum> $attributesToDelete
     */
	#[\JMS\Serializer\Annotation\SerializedName('AttributesToDelete')]
    #[\JMS\Serializer\Annotation\Type('array<enum<OpenAPI\OpenAPI\Models\Shared\FleetAttributeEnum>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $attributesToDelete = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ComputeCapacity')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ComputeCapacity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ComputeCapacity $computeCapacity = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DeleteVpcConfig')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $deleteVpcConfig = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DisconnectTimeoutInSeconds')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $disconnectTimeoutInSeconds = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DisplayName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $displayName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DomainJoinInfo')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DomainJoinInfo')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DomainJoinInfo $domainJoinInfo = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EnableDefaultInternetAccess')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $enableDefaultInternetAccess = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('IamRoleArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $iamRoleArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('IdleDisconnectTimeoutInSeconds')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $idleDisconnectTimeoutInSeconds = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ImageArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $imageArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ImageName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $imageName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('InstanceType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $instanceType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('MaxConcurrentSessions')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $maxConcurrentSessions = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('MaxUserDurationInSeconds')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $maxUserDurationInSeconds = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Platform')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\PlatformTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PlatformTypeEnum $platform = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SessionScriptS3Location')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\S3Location')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?S3Location $sessionScriptS3Location = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('StreamView')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\StreamViewEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?StreamViewEnum $streamView = null;
    
    /**
     * $usbDeviceFilterStrings
     * 
     * @var ?array<string> $usbDeviceFilterStrings
     */
	#[\JMS\Serializer\Annotation\SerializedName('UsbDeviceFilterStrings')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $usbDeviceFilterStrings = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VpcConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\VpcConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?VpcConfig $vpcConfig = null;
    
	public function __construct()
	{
		$this->attributesToDelete = null;
		$this->computeCapacity = null;
		$this->deleteVpcConfig = null;
		$this->description = null;
		$this->disconnectTimeoutInSeconds = null;
		$this->displayName = null;
		$this->domainJoinInfo = null;
		$this->enableDefaultInternetAccess = null;
		$this->iamRoleArn = null;
		$this->idleDisconnectTimeoutInSeconds = null;
		$this->imageArn = null;
		$this->imageName = null;
		$this->instanceType = null;
		$this->maxConcurrentSessions = null;
		$this->maxUserDurationInSeconds = null;
		$this->name = null;
		$this->platform = null;
		$this->sessionScriptS3Location = null;
		$this->streamView = null;
		$this->usbDeviceFilterStrings = null;
		$this->vpcConfig = null;
	}
}
