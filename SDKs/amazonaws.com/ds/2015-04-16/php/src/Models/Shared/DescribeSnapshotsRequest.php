<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeSnapshotsRequest - Contains the inputs for the <a>DescribeSnapshots</a> operation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeSnapshotsRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('DirectoryId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $directoryId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Limit')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $limit = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * $snapshotIds
     * 
     * @var ?array<string> $snapshotIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('SnapshotIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $snapshotIds = null;
    
	public function __construct()
	{
		$this->directoryId = null;
		$this->limit = null;
		$this->nextToken = null;
		$this->snapshotIds = null;
	}
}
