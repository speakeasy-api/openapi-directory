<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ImportCatalogToGlueResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $importCatalogToGlueResponse
     */
	
    public ?array $importCatalogToGlueResponse = null;
    
    /**
     * InternalServiceException
     * 
     * @var mixed $internalServiceException
     */
	
    public mixed $internalServiceException = null;
    
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
		$this->importCatalogToGlueResponse = null;
		$this->internalServiceException = null;
		$this->operationTimeoutException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
