<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AwsRedshiftClusterRestoreStatus - Information about the status of a cluster restore action. It only applies if the cluster was created by restoring a snapshot.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AwsRedshiftClusterRestoreStatus
{
	#[\JMS\Serializer\Annotation\SerializedName('CurrentRestoreRateInMegaBytesPerSecond')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $currentRestoreRateInMegaBytesPerSecond = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ElapsedTimeInSeconds')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $elapsedTimeInSeconds = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EstimatedTimeToCompletionInSeconds')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $estimatedTimeToCompletionInSeconds = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ProgressInMegaBytes')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $progressInMegaBytes = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SnapshotSizeInMegaBytes')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $snapshotSizeInMegaBytes = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $status = null;
    
	public function __construct()
	{
		$this->currentRestoreRateInMegaBytesPerSecond = null;
		$this->elapsedTimeInSeconds = null;
		$this->estimatedTimeToCompletionInSeconds = null;
		$this->progressInMegaBytes = null;
		$this->snapshotSizeInMegaBytes = null;
		$this->status = null;
	}
}
