<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class StopAssessmentResponse
{
    /**
     * AccessDeniedException
     * 
     * @var mixed $accessDeniedException
     */
	
    public mixed $accessDeniedException = null;
    
	
    public string $contentType;
    
    /**
     * InternalServerException
     * 
     * @var mixed $internalServerException
     */
	
    public mixed $internalServerException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $stopAssessmentResponse
     */
	
    public ?array $stopAssessmentResponse = null;
    
    /**
     * ThrottlingException
     * 
     * @var mixed $throttlingException
     */
	
    public mixed $throttlingException = null;
    
    /**
     * ValidationException
     * 
     * @var mixed $validationException
     */
	
    public mixed $validationException = null;
    
	public function __construct()
	{
		$this->accessDeniedException = null;
		$this->contentType = "";
		$this->internalServerException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->stopAssessmentResponse = null;
		$this->throttlingException = null;
		$this->validationException = null;
	}
}
