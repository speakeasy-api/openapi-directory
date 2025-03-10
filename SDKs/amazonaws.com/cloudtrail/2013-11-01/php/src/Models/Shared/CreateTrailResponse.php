<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateTrailResponse - Returns the objects or data listed below if successful. Otherwise, returns an error.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateTrailResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('CloudWatchLogsLogGroupArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $cloudWatchLogsLogGroupArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CloudWatchLogsRoleArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $cloudWatchLogsRoleArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('IncludeGlobalServiceEvents')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $includeGlobalServiceEvents = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('IsMultiRegionTrail')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isMultiRegionTrail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('IsOrganizationTrail')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isOrganizationTrail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('KmsKeyId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kmsKeyId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LogFileValidationEnabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $logFileValidationEnabled = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('S3BucketName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $s3BucketName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('S3KeyPrefix')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $s3KeyPrefix = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SnsTopicARN')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $snsTopicARN = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SnsTopicName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $snsTopicName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TrailARN')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $trailARN = null;
    
	public function __construct()
	{
		$this->cloudWatchLogsLogGroupArn = null;
		$this->cloudWatchLogsRoleArn = null;
		$this->includeGlobalServiceEvents = null;
		$this->isMultiRegionTrail = null;
		$this->isOrganizationTrail = null;
		$this->kmsKeyId = null;
		$this->logFileValidationEnabled = null;
		$this->name = null;
		$this->s3BucketName = null;
		$this->s3KeyPrefix = null;
		$this->snsTopicARN = null;
		$this->snsTopicName = null;
		$this->trailARN = null;
	}
}
