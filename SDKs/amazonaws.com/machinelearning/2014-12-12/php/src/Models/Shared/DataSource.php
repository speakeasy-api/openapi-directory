<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DataSource - <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DataSource
{
	#[\JMS\Serializer\Annotation\SerializedName('ComputeStatistics')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $computeStatistics = null;
    
    /**
     * Long integer type that is a 64-bit signed number.
     * 
     * @var ?int $computeTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('ComputeTime')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $computeTime = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CreatedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $createdAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CreatedByIamUser')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createdByIamUser = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DataLocationS3')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dataLocationS3 = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DataRearrangement')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dataRearrangement = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DataSizeInBytes')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $dataSizeInBytes = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DataSourceId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dataSourceId = null;
    
    /**
     * A timestamp represented in epoch time.
     * 
     * @var ?\DateTime $finishedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('FinishedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $finishedAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LastUpdatedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $lastUpdatedAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $message = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NumberOfFiles')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $numberOfFiles = null;
    
    /**
     * The datasource details that are specific to Amazon RDS.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\RDSMetadata $rdsMetadata
     */
	#[\JMS\Serializer\Annotation\SerializedName('RDSMetadata')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\RDSMetadata')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?RDSMetadata $rdsMetadata = null;
    
    /**
     * Describes the <code>DataSource</code> details specific to Amazon Redshift.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\RedshiftMetadata $redshiftMetadata
     */
	#[\JMS\Serializer\Annotation\SerializedName('RedshiftMetadata')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\RedshiftMetadata')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?RedshiftMetadata $redshiftMetadata = null;
    
    /**
     * The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. 
     * 
     * @var ?string $roleARN
     */
	#[\JMS\Serializer\Annotation\SerializedName('RoleARN')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $roleARN = null;
    
    /**
     * A timestamp represented in epoch time.
     * 
     * @var ?\DateTime $startedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('StartedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $startedAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\EntityStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EntityStatusEnum $status = null;
    
	public function __construct()
	{
		$this->computeStatistics = null;
		$this->computeTime = null;
		$this->createdAt = null;
		$this->createdByIamUser = null;
		$this->dataLocationS3 = null;
		$this->dataRearrangement = null;
		$this->dataSizeInBytes = null;
		$this->dataSourceId = null;
		$this->finishedAt = null;
		$this->lastUpdatedAt = null;
		$this->message = null;
		$this->name = null;
		$this->numberOfFiles = null;
		$this->rdsMetadata = null;
		$this->redshiftMetadata = null;
		$this->roleARN = null;
		$this->startedAt = null;
		$this->status = null;
	}
}
