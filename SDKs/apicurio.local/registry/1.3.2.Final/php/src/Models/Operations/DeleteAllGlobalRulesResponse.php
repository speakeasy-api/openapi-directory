<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DeleteAllGlobalRulesResponse
{
	
    public string $contentType;
    
    /**
     * Common response for all operations that can fail with an unexpected server error.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Error $error
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Error $error = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->error = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
