<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateQuantumTaskResponse
{
    /**
     * AccessDeniedException
     * 
     * @var mixed $accessDeniedException
     */
	
    public mixed $accessDeniedException = null;
    
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CreateQuantumTaskResponse $createQuantumTaskResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CreateQuantumTaskResponse $createQuantumTaskResponse = null;
    
    /**
     * DeviceOfflineException
     * 
     * @var mixed $deviceOfflineException
     */
	
    public mixed $deviceOfflineException = null;
    
    /**
     * DeviceRetiredException
     * 
     * @var mixed $deviceRetiredException
     */
	
    public mixed $deviceRetiredException = null;
    
    /**
     * InternalServiceException
     * 
     * @var mixed $internalServiceException
     */
	
    public mixed $internalServiceException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ServiceQuotaExceededException
     * 
     * @var mixed $serviceQuotaExceededException
     */
	
    public mixed $serviceQuotaExceededException = null;
    
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
		$this->createQuantumTaskResponse = null;
		$this->deviceOfflineException = null;
		$this->deviceRetiredException = null;
		$this->internalServiceException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->serviceQuotaExceededException = null;
		$this->throttlingException = null;
		$this->validationException = null;
	}
}
