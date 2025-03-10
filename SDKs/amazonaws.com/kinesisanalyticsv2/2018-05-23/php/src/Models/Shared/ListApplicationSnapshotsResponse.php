<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListApplicationSnapshotsResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListApplicationSnapshotsResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * $snapshotSummaries
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\SnapshotDetails> $snapshotSummaries
     */
	#[\JMS\Serializer\Annotation\SerializedName('SnapshotSummaries')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\SnapshotDetails>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $snapshotSummaries = null;
    
	public function __construct()
	{
		$this->nextToken = null;
		$this->snapshotSummaries = null;
	}
}
