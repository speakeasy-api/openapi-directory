<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PutRetentionPolicyRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('logGroupName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $logGroupName;
    
    /**
     * <p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
     * 
     * @var int $retentionInDays
     */
	#[\JMS\Serializer\Annotation\SerializedName('retentionInDays')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $retentionInDays;
    
	public function __construct()
	{
		$this->logGroupName = "";
		$this->retentionInDays = 0;
	}
}
