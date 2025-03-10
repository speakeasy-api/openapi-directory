<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Channel - Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Channel
{
    /**
     * $eventPublishers
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\EventPublisherEnum> $eventPublishers
     */
	#[\JMS\Serializer\Annotation\SerializedName('eventPublishers')]
    #[\JMS\Serializer\Annotation\Type('array<enum<OpenAPI\OpenAPI\Models\Shared\EventPublisherEnum>>')]
    public array $eventPublishers;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('uri')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $uri;
    
	public function __construct()
	{
		$this->eventPublishers = [];
		$this->id = null;
		$this->uri = "";
	}
}
