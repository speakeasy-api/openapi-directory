<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateWorkflowResponse
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
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CreateWorkflowResponse $createWorkflowResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CreateWorkflowResponse $createWorkflowResponse = null;
    
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
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ResourceExistsException
     * 
     * @var mixed $resourceExistsException
     */
	
    public mixed $resourceExistsException = null;
    
    /**
     * ServiceUnavailableException
     * 
     * @var mixed $serviceUnavailableException
     */
	
    public mixed $serviceUnavailableException = null;
    
    /**
     * ThrottlingException
     * 
     * @var mixed $throttlingException
     */
	
    public mixed $throttlingException = null;
    
	public function __construct()
	{
		$this->accessDeniedException = null;
		$this->contentType = "";
		$this->createWorkflowResponse = null;
		$this->internalServiceError = null;
		$this->invalidRequestException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceExistsException = null;
		$this->serviceUnavailableException = null;
		$this->throttlingException = null;
	}
}
