<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GETListDeadLetterSourceQueuesRequest
{
    /**
     * The AWS account number
     * 
     * @var int $accountNumber
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=AccountNumber')]
    public int $accountNumber;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Action')]
    public GETListDeadLetterSourceQueuesActionEnum $action;
    
    /**
     * Maximum number of results to include in the response. Value range is 1 to 1000. You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.
     * 
     * @var ?int $maxResults
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=MaxResults')]
    public ?int $maxResults = null;
    
    /**
     * Pagination token to request the next set of results.
     * 
     * @var ?string $nextToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=NextToken')]
    public ?string $nextToken = null;
    
    /**
     * The name of the queue
     * 
     * @var string $queueName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=QueueName')]
    public string $queueName;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Version')]
    public GETListDeadLetterSourceQueuesVersionEnum $version;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Algorithm')]
    public ?string $xAmzAlgorithm = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Content-Sha256')]
    public ?string $xAmzContentSha256 = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Credential')]
    public ?string $xAmzCredential = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Date')]
    public ?string $xAmzDate = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Security-Token')]
    public ?string $xAmzSecurityToken = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Signature')]
    public ?string $xAmzSignature = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-SignedHeaders')]
    public ?string $xAmzSignedHeaders = null;
    
	public function __construct()
	{
		$this->accountNumber = 0;
		$this->action = \OpenAPI\OpenAPI\Models\Operations\GETListDeadLetterSourceQueuesActionEnum::LIST_DEAD_LETTER_SOURCE_QUEUES;
		$this->maxResults = null;
		$this->nextToken = null;
		$this->queueName = "";
		$this->version = \OpenAPI\OpenAPI\Models\Operations\GETListDeadLetterSourceQueuesVersionEnum::TWO_THOUSAND_AND_TWELVE1105;
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
