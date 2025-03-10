<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateCanaryResponse
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
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * RequestEntityTooLargeException
     * 
     * @var mixed $requestEntityTooLargeException
     */
	
    public mixed $requestEntityTooLargeException = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $updateCanaryResponse
     */
	
    public ?array $updateCanaryResponse = null;
    
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
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->requestEntityTooLargeException = null;
		$this->resourceNotFoundException = null;
		$this->updateCanaryResponse = null;
		$this->validationException = null;
	}
}
