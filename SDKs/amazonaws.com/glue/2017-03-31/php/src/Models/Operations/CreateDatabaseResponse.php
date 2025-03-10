<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateDatabaseResponse
{
    /**
     * AlreadyExistsException
     * 
     * @var mixed $alreadyExistsException
     */
	
    public mixed $alreadyExistsException = null;
    
    /**
     * ConcurrentModificationException
     * 
     * @var mixed $concurrentModificationException
     */
	
    public mixed $concurrentModificationException = null;
    
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $createDatabaseResponse
     */
	
    public ?array $createDatabaseResponse = null;
    
    /**
     * FederatedResourceAlreadyExistsException
     * 
     * @var mixed $federatedResourceAlreadyExistsException
     */
	
    public mixed $federatedResourceAlreadyExistsException = null;
    
    /**
     * GlueEncryptionException
     * 
     * @var mixed $glueEncryptionException
     */
	
    public mixed $glueEncryptionException = null;
    
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
    
    /**
     * ResourceNumberLimitExceededException
     * 
     * @var mixed $resourceNumberLimitExceededException
     */
	
    public mixed $resourceNumberLimitExceededException = null;
    
	public function __construct()
	{
		$this->alreadyExistsException = null;
		$this->concurrentModificationException = null;
		$this->contentType = "";
		$this->createDatabaseResponse = null;
		$this->federatedResourceAlreadyExistsException = null;
		$this->glueEncryptionException = null;
		$this->internalServiceException = null;
		$this->invalidInputException = null;
		$this->operationTimeoutException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNumberLimitExceededException = null;
	}
}
