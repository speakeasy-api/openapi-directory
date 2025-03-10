<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateLoggingConfigurationResponse
{
	
    public string $contentType;
    
    /**
     * InternalServerError
     * 
     * @var mixed $internalServerError
     */
	
    public mixed $internalServerError = null;
    
    /**
     * InvalidRequestException
     * 
     * @var mixed $invalidRequestException
     */
	
    public mixed $invalidRequestException = null;
    
    /**
     * InvalidTokenException
     * 
     * @var mixed $invalidTokenException
     */
	
    public mixed $invalidTokenException = null;
    
    /**
     * LogDestinationPermissionException
     * 
     * @var mixed $logDestinationPermissionException
     */
	
    public mixed $logDestinationPermissionException = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ThrottlingException
     * 
     * @var mixed $throttlingException
     */
	
    public mixed $throttlingException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\UpdateLoggingConfigurationResponse $updateLoggingConfigurationResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\UpdateLoggingConfigurationResponse $updateLoggingConfigurationResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->internalServerError = null;
		$this->invalidRequestException = null;
		$this->invalidTokenException = null;
		$this->logDestinationPermissionException = null;
		$this->resourceNotFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->throttlingException = null;
		$this->updateLoggingConfigurationResponse = null;
	}
}
