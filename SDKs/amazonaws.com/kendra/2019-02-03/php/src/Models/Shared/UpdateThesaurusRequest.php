<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class UpdateThesaurusRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('Description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('IndexId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $indexId;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RoleArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $roleArn = null;
    
    /**
     * Information required to find a specific file in an Amazon S3 bucket.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\S3Path $sourceS3Path
     */
	#[\JMS\Serializer\Annotation\SerializedName('SourceS3Path')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\S3Path')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?S3Path $sourceS3Path = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->id = "";
		$this->indexId = "";
		$this->name = null;
		$this->roleArn = null;
		$this->sourceS3Path = null;
	}
}
