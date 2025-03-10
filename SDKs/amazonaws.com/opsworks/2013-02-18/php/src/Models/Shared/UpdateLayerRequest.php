<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class UpdateLayerRequest
{
    /**
     * $attributes
     * 
     * @var ?array<string, string> $attributes
     */
	#[\JMS\Serializer\Annotation\SerializedName('Attributes')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $attributes = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('AutoAssignElasticIps')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $autoAssignElasticIps = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('AutoAssignPublicIps')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $autoAssignPublicIps = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CloudWatchLogsConfiguration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsConfiguration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CloudWatchLogsConfiguration $cloudWatchLogsConfiguration = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CustomInstanceProfileArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $customInstanceProfileArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CustomJson')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $customJson = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CustomRecipes')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Recipes')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Recipes $customRecipes = null;
    
    /**
     * $customSecurityGroupIds
     * 
     * @var ?array<string> $customSecurityGroupIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('CustomSecurityGroupIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $customSecurityGroupIds = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EnableAutoHealing')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $enableAutoHealing = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('InstallUpdatesOnBoot')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $installUpdatesOnBoot = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LayerId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $layerId;
    
	#[\JMS\Serializer\Annotation\SerializedName('LifecycleEventConfiguration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LifecycleEventConfiguration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LifecycleEventConfiguration $lifecycleEventConfiguration = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * $packages
     * 
     * @var ?array<string> $packages
     */
	#[\JMS\Serializer\Annotation\SerializedName('Packages')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $packages = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Shortname')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $shortname = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('UseEbsOptimizedInstances')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $useEbsOptimizedInstances = null;
    
    /**
     * $volumeConfigurations
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\VolumeConfiguration> $volumeConfigurations
     */
	#[\JMS\Serializer\Annotation\SerializedName('VolumeConfigurations')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\VolumeConfiguration>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $volumeConfigurations = null;
    
	public function __construct()
	{
		$this->attributes = null;
		$this->autoAssignElasticIps = null;
		$this->autoAssignPublicIps = null;
		$this->cloudWatchLogsConfiguration = null;
		$this->customInstanceProfileArn = null;
		$this->customJson = null;
		$this->customRecipes = null;
		$this->customSecurityGroupIds = null;
		$this->enableAutoHealing = null;
		$this->installUpdatesOnBoot = null;
		$this->layerId = "";
		$this->lifecycleEventConfiguration = null;
		$this->name = null;
		$this->packages = null;
		$this->shortname = null;
		$this->useEbsOptimizedInstances = null;
		$this->volumeConfigurations = null;
	}
}
