<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class StartTargetedSentimentDetectionJobRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('ClientRequestToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $clientRequestToken = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DataAccessRoleArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $dataAccessRoleArn;
    
    /**
     * The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\InputDataConfig $inputDataConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('InputDataConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\InputDataConfig')]
    public InputDataConfig $inputDataConfig;
    
	#[\JMS\Serializer\Annotation\SerializedName('JobName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $jobName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LanguageCode')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum>')]
    public LanguageCodeEnum $languageCode;
    
	#[\JMS\Serializer\Annotation\SerializedName('OutputDataConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OutputDataConfig')]
    public OutputDataConfig $outputDataConfig;
    
    /**
     * $tags
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Tag> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('Tags')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Tag>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VolumeKmsKeyId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $volumeKmsKeyId = null;
    
    /**
     *  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. 
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\VpcConfig $vpcConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('VpcConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\VpcConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?VpcConfig $vpcConfig = null;
    
	public function __construct()
	{
		$this->clientRequestToken = null;
		$this->dataAccessRoleArn = "";
		$this->inputDataConfig = new \OpenAPI\OpenAPI\Models\Shared\InputDataConfig();
		$this->jobName = null;
		$this->languageCode = \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum::EN;
		$this->outputDataConfig = new \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig();
		$this->tags = null;
		$this->volumeKmsKeyId = null;
		$this->vpcConfig = null;
	}
}
