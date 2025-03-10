<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InferenceExperimentSummary - Lists a summary of properties of an inference experiment.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InferenceExperimentSummary
{
	#[\JMS\Serializer\Annotation\SerializedName('CompletionTime')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $completionTime = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CreationTime')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $creationTime;
    
	#[\JMS\Serializer\Annotation\SerializedName('Description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LastModifiedTime')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $lastModifiedTime;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('RoleArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $roleArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Schedule')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\InferenceExperimentSchedule')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InferenceExperimentSchedule $schedule = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\InferenceExperimentStatusEnum>')]
    public InferenceExperimentStatusEnum $status;
    
	#[\JMS\Serializer\Annotation\SerializedName('StatusReason')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $statusReason = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\InferenceExperimentTypeEnum>')]
    public InferenceExperimentTypeEnum $type;
    
	public function __construct()
	{
		$this->completionTime = null;
		$this->creationTime = new \DateTime();
		$this->description = null;
		$this->lastModifiedTime = new \DateTime();
		$this->name = "";
		$this->roleArn = null;
		$this->schedule = null;
		$this->status = \OpenAPI\OpenAPI\Models\Shared\InferenceExperimentStatusEnum::CREATING;
		$this->statusReason = null;
		$this->type = \OpenAPI\OpenAPI\Models\Shared\InferenceExperimentTypeEnum::SHADOW_MODE;
	}
}
