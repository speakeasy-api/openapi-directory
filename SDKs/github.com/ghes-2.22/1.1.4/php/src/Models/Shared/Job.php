<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Job - Information of a job execution in a workflow run
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Job
{
	#[\JMS\Serializer\Annotation\SerializedName('check_run_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $checkRunUrl;
    
    /**
     * The time that the job finished, in ISO 8601 format.
     * 
     * @var \DateTime $completedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('completed_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $completedAt;
    
    /**
     * The outcome of the job.
     * 
     * @var string $conclusion
     */
	#[\JMS\Serializer\Annotation\SerializedName('conclusion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $conclusion;
    
    /**
     * The SHA of the commit that is being run.
     * 
     * @var string $headSha
     */
	#[\JMS\Serializer\Annotation\SerializedName('head_sha')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $headSha;
    
	#[\JMS\Serializer\Annotation\SerializedName('html_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $htmlUrl;
    
    /**
     * The id of the job.
     * 
     * @var int $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $id;
    
    /**
     * The name of the job.
     * 
     * @var string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('node_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $nodeId;
    
    /**
     * Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run.
     * 
     * @var ?int $runAttempt
     */
	#[\JMS\Serializer\Annotation\SerializedName('run_attempt')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $runAttempt = null;
    
    /**
     * The id of the associated workflow run.
     * 
     * @var int $runId
     */
	#[\JMS\Serializer\Annotation\SerializedName('run_id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $runId;
    
	#[\JMS\Serializer\Annotation\SerializedName('run_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $runUrl;
    
    /**
     * The time that the job started, in ISO 8601 format.
     * 
     * @var \DateTime $startedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('started_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $startedAt;
    
    /**
     * The phase of the lifecycle that the job is currently in.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum $status
     */
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\JobStatusEnum>')]
    public JobStatusEnum $status;
    
    /**
     * Steps in this job.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\JobSteps> $steps
     */
	#[\JMS\Serializer\Annotation\SerializedName('steps')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\JobSteps>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $steps = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $url;
    
	public function __construct()
	{
		$this->checkRunUrl = "";
		$this->completedAt = new \DateTime();
		$this->conclusion = "";
		$this->headSha = "";
		$this->htmlUrl = "";
		$this->id = 0;
		$this->name = "";
		$this->nodeId = "";
		$this->runAttempt = null;
		$this->runId = 0;
		$this->runUrl = "";
		$this->startedAt = new \DateTime();
		$this->status = \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum::QUEUED;
		$this->steps = null;
		$this->url = "";
	}
}
