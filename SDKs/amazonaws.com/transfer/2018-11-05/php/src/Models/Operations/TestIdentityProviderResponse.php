<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class TestIdentityProviderResponse
{
	
    public string $contentType;
    
    /**
     * InternalServiceError
     * 
     * @var mixed $internalServiceError
     */
	
    public mixed $internalServiceError = null;
    
    /**
     * InvalidRequestException
     * 
     * @var mixed $invalidRequestException
     */
	
    public mixed $invalidRequestException = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ServiceUnavailableException
     * 
     * @var mixed $serviceUnavailableException
     */
	
    public mixed $serviceUnavailableException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\TestIdentityProviderResponse $testIdentityProviderResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\TestIdentityProviderResponse $testIdentityProviderResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->internalServiceError = null;
		$this->invalidRequestException = null;
		$this->resourceNotFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->serviceUnavailableException = null;
		$this->testIdentityProviderResponse = null;
	}
}
