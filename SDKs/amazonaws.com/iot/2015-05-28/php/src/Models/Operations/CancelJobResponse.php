<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CancelJobResponse
{
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CancelJobResponse $cancelJobResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CancelJobResponse $cancelJobResponse = null;
    
	
    public string $contentType;
    
    /**
     * InvalidRequestException
     * 
     * @var mixed $invalidRequestException
     */
	
    public mixed $invalidRequestException = null;
    
    /**
     * LimitExceededException
     * 
     * @var mixed $limitExceededException
     */
	
    public mixed $limitExceededException = null;
    
    /**
     * ServiceUnavailableException
     * 
     * @var mixed $serviceUnavailableException
     */
	
    public mixed $serviceUnavailableException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
    /**
     * ThrottlingException
     * 
     * @var mixed $throttlingException
     */
	
    public mixed $throttlingException = null;
    
	public function __construct()
	{
		$this->cancelJobResponse = null;
		$this->contentType = "";
		$this->invalidRequestException = null;
		$this->limitExceededException = null;
		$this->serviceUnavailableException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNotFoundException = null;
		$this->throttlingException = null;
	}
}
