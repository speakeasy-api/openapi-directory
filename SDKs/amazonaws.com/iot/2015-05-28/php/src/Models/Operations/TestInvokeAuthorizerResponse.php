<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class TestInvokeAuthorizerResponse
{
	
    public string $contentType;
    
    /**
     * InternalFailureException
     * 
     * @var mixed $internalFailureException
     */
	
    public mixed $internalFailureException = null;
    
    /**
     * InvalidRequestException
     * 
     * @var mixed $invalidRequestException
     */
	
    public mixed $invalidRequestException = null;
    
    /**
     * InvalidResponseException
     * 
     * @var mixed $invalidResponseException
     */
	
    public mixed $invalidResponseException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
    /**
     * ServiceUnavailableException
     * 
     * @var mixed $serviceUnavailableException
     */
	
    public mixed $serviceUnavailableException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\TestInvokeAuthorizerResponse $testInvokeAuthorizerResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\TestInvokeAuthorizerResponse $testInvokeAuthorizerResponse = null;
    
    /**
     * ThrottlingException
     * 
     * @var mixed $throttlingException
     */
	
    public mixed $throttlingException = null;
    
    /**
     * UnauthorizedException
     * 
     * @var mixed $unauthorizedException
     */
	
    public mixed $unauthorizedException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->internalFailureException = null;
		$this->invalidRequestException = null;
		$this->invalidResponseException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNotFoundException = null;
		$this->serviceUnavailableException = null;
		$this->testInvokeAuthorizerResponse = null;
		$this->throttlingException = null;
		$this->unauthorizedException = null;
	}
}
