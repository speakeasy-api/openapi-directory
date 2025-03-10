<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class StartSuiteRunResponse
{
    /**
     * ConflictException
     * 
     * @var mixed $conflictException
     */
	
    public mixed $conflictException = null;
    
	
    public string $contentType;
    
    /**
     * InternalServerException
     * 
     * @var mixed $internalServerException
     */
	
    public mixed $internalServerException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\StartSuiteRunResponse $startSuiteRunResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\StartSuiteRunResponse $startSuiteRunResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ValidationException
     * 
     * @var mixed $validationException
     */
	
    public mixed $validationException = null;
    
	public function __construct()
	{
		$this->conflictException = null;
		$this->contentType = "";
		$this->internalServerException = null;
		$this->startSuiteRunResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->validationException = null;
	}
}
