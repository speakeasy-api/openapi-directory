<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetPoliciesStatsResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GetPoliciesStatsResponse $getPoliciesStatsResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\GetPoliciesStatsResponse $getPoliciesStatsResponse = null;
    
    /**
     * InternalServerException
     * 
     * @var mixed $internalServerException
     */
	
    public mixed $internalServerException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->getPoliciesStatsResponse = null;
		$this->internalServerException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
