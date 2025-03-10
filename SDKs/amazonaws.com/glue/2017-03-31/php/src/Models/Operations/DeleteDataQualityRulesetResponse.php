<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DeleteDataQualityRulesetResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $deleteDataQualityRulesetResponse
     */
	
    public ?array $deleteDataQualityRulesetResponse = null;
    
    /**
     * EntityNotFoundException
     * 
     * @var mixed $entityNotFoundException
     */
	
    public mixed $entityNotFoundException = null;
    
    /**
     * InternalServiceException
     * 
     * @var mixed $internalServiceException
     */
	
    public mixed $internalServiceException = null;
    
    /**
     * InvalidInputException
     * 
     * @var mixed $invalidInputException
     */
	
    public mixed $invalidInputException = null;
    
    /**
     * OperationTimeoutException
     * 
     * @var mixed $operationTimeoutException
     */
	
    public mixed $operationTimeoutException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->deleteDataQualityRulesetResponse = null;
		$this->entityNotFoundException = null;
		$this->internalServiceException = null;
		$this->invalidInputException = null;
		$this->operationTimeoutException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
