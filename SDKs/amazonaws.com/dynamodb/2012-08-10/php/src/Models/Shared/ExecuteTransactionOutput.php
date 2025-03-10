<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ExecuteTransactionOutput - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ExecuteTransactionOutput
{
    /**
     * $consumedCapacity
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ConsumedCapacity> $consumedCapacity
     */
	#[\JMS\Serializer\Annotation\SerializedName('ConsumedCapacity')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ConsumedCapacity>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $consumedCapacity = null;
    
    /**
     * $responses
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ItemResponse> $responses
     */
	#[\JMS\Serializer\Annotation\SerializedName('Responses')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ItemResponse>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $responses = null;
    
	public function __construct()
	{
		$this->consumedCapacity = null;
		$this->responses = null;
	}
}
