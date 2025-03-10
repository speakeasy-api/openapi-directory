<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * DeploymentReleasesUpdate200ApplicationJSON - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class DeploymentReleasesUpdate200ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('blob_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $blobUrl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * $diffPackageMap
     * 
     * @var ?array<string, \OpenAPI\OpenAPI\Models\Operations\DeploymentReleasesUpdate200ApplicationJSONDiffPackageMap> $diffPackageMap
     */
	#[\JMS\Serializer\Annotation\SerializedName('diff_package_map')]
    #[\JMS\Serializer\Annotation\Type('array<string, OpenAPI\OpenAPI\Models\Operations\DeploymentReleasesUpdate200ApplicationJSONDiffPackageMap>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $diffPackageMap = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('is_disabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isDisabled = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('is_mandatory')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isMandatory = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('label')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $label = null;
    
    /**
     * Set on 'Promote'
     * 
     * @var ?string $originalDeployment
     */
	#[\JMS\Serializer\Annotation\SerializedName('original_deployment')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $originalDeployment = null;
    
    /**
     * Set on 'Promote' and 'Rollback'
     * 
     * @var ?string $originalLabel
     */
	#[\JMS\Serializer\Annotation\SerializedName('original_label')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $originalLabel = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('package_hash')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $packageHash = null;
    
    /**
     * The release method is unknown if unspecified
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\DeploymentReleasesUpdate200ApplicationJSONReleaseMethodEnum $releaseMethod
     */
	#[\JMS\Serializer\Annotation\SerializedName('release_method')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\DeploymentReleasesUpdate200ApplicationJSONReleaseMethodEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DeploymentReleasesUpdate200ApplicationJSONReleaseMethodEnum $releaseMethod = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('released_by')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $releasedBy = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('rollout')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $rollout = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('size')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $size = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('target_binary_range')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $targetBinaryRange = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('upload_time')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $uploadTime = null;
    
	public function __construct()
	{
		$this->blobUrl = null;
		$this->description = null;
		$this->diffPackageMap = null;
		$this->isDisabled = null;
		$this->isMandatory = null;
		$this->label = null;
		$this->originalDeployment = null;
		$this->originalLabel = null;
		$this->packageHash = null;
		$this->releaseMethod = null;
		$this->releasedBy = null;
		$this->rollout = null;
		$this->size = null;
		$this->targetBinaryRange = null;
		$this->uploadTime = null;
	}
}
