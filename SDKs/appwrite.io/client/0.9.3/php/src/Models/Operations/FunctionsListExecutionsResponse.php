<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class FunctionsListExecutionsResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Executions List
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ExecutionList $executionList
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ExecutionList $executionList = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->executionList = null;
	}
}
