<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PutPartnerEventsResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PutPartnerEventsResponse
{
    /**
     * $entries
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\PutPartnerEventsResultEntry> $entries
     */
	#[\JMS\Serializer\Annotation\SerializedName('Entries')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\PutPartnerEventsResultEntry>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $entries = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('FailedEntryCount')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $failedEntryCount = null;
    
	public function __construct()
	{
		$this->entries = null;
		$this->failedEntryCount = null;
	}
}
