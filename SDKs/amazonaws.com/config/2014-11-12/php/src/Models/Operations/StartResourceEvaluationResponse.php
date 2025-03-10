<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class StartResourceEvaluationResponse
{
	
    public string $contentType;
    
    /**
     * IdempotentParameterMismatch
     * 
     * @var mixed $idempotentParameterMismatch
     */
	
    public mixed $idempotentParameterMismatch = null;
    
    /**
     * InvalidParameterValueException
     * 
     * @var mixed $invalidParameterValueException
     */
	
    public mixed $invalidParameterValueException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\StartResourceEvaluationResponse $startResourceEvaluationResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\StartResourceEvaluationResponse $startResourceEvaluationResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->idempotentParameterMismatch = null;
		$this->invalidParameterValueException = null;
		$this->startResourceEvaluationResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
