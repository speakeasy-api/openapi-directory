<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class SubmitTaskStateChangeRequest
{
    /**
     * $attachments
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AttachmentStateChange> $attachments
     */
	#[\JMS\Serializer\Annotation\SerializedName('attachments')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AttachmentStateChange>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $attachments = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('cluster')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $cluster = null;
    
    /**
     * $containers
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ContainerStateChange> $containers
     */
	#[\JMS\Serializer\Annotation\SerializedName('containers')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ContainerStateChange>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $containers = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('executionStoppedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $executionStoppedAt = null;
    
    /**
     * $managedAgents
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ManagedAgentStateChange> $managedAgents
     */
	#[\JMS\Serializer\Annotation\SerializedName('managedAgents')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ManagedAgentStateChange>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $managedAgents = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('pullStartedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $pullStartedAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('pullStoppedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $pullStoppedAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('reason')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $reason = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $status = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('task')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $task = null;
    
	public function __construct()
	{
		$this->attachments = null;
		$this->cluster = null;
		$this->containers = null;
		$this->executionStoppedAt = null;
		$this->managedAgents = null;
		$this->pullStartedAt = null;
		$this->pullStoppedAt = null;
		$this->reason = null;
		$this->status = null;
		$this->task = null;
	}
}
