<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DeleteApplicationReferenceDataSourceResponse
{
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
     * @var ?array<string, mixed> $deleteApplicationReferenceDataSourceResponse
     */
	
    public ?array $deleteApplicationReferenceDataSourceResponse = null;
    
    /**
     * InvalidArgumentException
     * 
     * @var mixed $invalidArgumentException
     */
	
    public mixed $invalidArgumentException = null;
    
    /**
     * ResourceInUseException
     * 
     * @var mixed $resourceInUseException
     */
	
    public mixed $resourceInUseException = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * UnsupportedOperationException
     * 
     * @var mixed $unsupportedOperationException
     */
	
    public mixed $unsupportedOperationException = null;
    
	public function __construct()
	{
		$this->concurrentModificationException = null;
		$this->contentType = "";
		$this->deleteApplicationReferenceDataSourceResponse = null;
		$this->invalidArgumentException = null;
		$this->resourceInUseException = null;
		$this->resourceNotFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->unsupportedOperationException = null;
	}
}
