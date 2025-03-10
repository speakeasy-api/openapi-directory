<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ChecksListForRef200ApplicationJSON - Response
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ChecksListForRef200ApplicationJSON
{
    /**
     * $checkRuns
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\CheckRun> $checkRuns
     */
	#[\JMS\Serializer\Annotation\SerializedName('check_runs')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CheckRun>')]
    public array $checkRuns;
    
	#[\JMS\Serializer\Annotation\SerializedName('total_count')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $totalCount;
    
	public function __construct()
	{
		$this->checkRuns = [];
		$this->totalCount = 0;
	}
}
