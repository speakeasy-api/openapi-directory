<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Consumer
{
	#[\JMS\Serializer\Annotation\SerializedName('aggregated_request_count')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $aggregatedRequestCount = null;
    
    /**
     * ID of your Apideck Application
     * 
     * @var ?string $applicationId
     */
	#[\JMS\Serializer\Annotation\SerializedName('application_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $applicationId = null;
    
    /**
     * $connections
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ConsumerConnection> $connections
     */
	#[\JMS\Serializer\Annotation\SerializedName('connections')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ConsumerConnection>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $connections = null;
    
    /**
     * Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.
     * 
     * @var string $consumerId
     */
	#[\JMS\Serializer\Annotation\SerializedName('consumer_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $consumerId;
    
	#[\JMS\Serializer\Annotation\SerializedName('created')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $created = null;
    
    /**
     * The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ConsumerMetadata $metadata
     */
	#[\JMS\Serializer\Annotation\SerializedName('metadata')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConsumerMetadata')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ConsumerMetadata $metadata = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('modified')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $modified = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('request_count_updated')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $requestCountUpdated = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('request_counts')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\RequestCountAllocation')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?RequestCountAllocation $requestCounts = null;
    
    /**
     * $services
     * 
     * @var ?array<string> $services
     */
	#[\JMS\Serializer\Annotation\SerializedName('services')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $services = null;
    
	public function __construct()
	{
		$this->aggregatedRequestCount = null;
		$this->applicationId = null;
		$this->connections = null;
		$this->consumerId = "";
		$this->created = null;
		$this->metadata = null;
		$this->modified = null;
		$this->requestCountUpdated = null;
		$this->requestCounts = null;
		$this->services = null;
	}
}
