<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * BranchConfigurationsUpdate200ApplicationJSONToolsetsXcodeAppExtensionProvisioningProfileFiles - Provisioning profile fetch and store information
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class BranchConfigurationsUpdate200ApplicationJSONToolsetsXcodeAppExtensionProvisioningProfileFiles
{
    /**
     * File id from secure file storage
     * 
     * @var ?string $fileId
     */
	#[\JMS\Serializer\Annotation\SerializedName('fileId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fileId = null;
    
    /**
     * Name of uploaded provisioning profile
     * 
     * @var ?string $fileName
     */
	#[\JMS\Serializer\Annotation\SerializedName('fileName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fileName = null;
    
    /**
     * Target the provisioning profile is used to sign
     * 
     * @var ?string $targetBundleIdentifier
     */
	#[\JMS\Serializer\Annotation\SerializedName('targetBundleIdentifier')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $targetBundleIdentifier = null;
    
    /**
     * Upload id to App Center File Upload Store
     * 
     * @var ?string $uploadId
     */
	#[\JMS\Serializer\Annotation\SerializedName('uploadId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uploadId = null;
    
	public function __construct()
	{
		$this->fileId = null;
		$this->fileName = null;
		$this->targetBundleIdentifier = null;
		$this->uploadId = null;
	}
}
