<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class EnableSharingWithAwsOrganizationResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EnableSharingWithAwsOrganizationResponse $enableSharingWithAwsOrganizationResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\EnableSharingWithAwsOrganizationResponse $enableSharingWithAwsOrganizationResponse = null;
    
    /**
     * OperationNotPermittedException
     * 
     * @var mixed $operationNotPermittedException
     */
	
    public mixed $operationNotPermittedException = null;
    
    /**
     * ServiceUnavailableException
     * 
     * @var mixed $serviceUnavailableException
     */
	
    public mixed $serviceUnavailableException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ServerInternalException
     * 
     * @var mixed $serverInternalException
     */
	
    public mixed $serverInternalException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->enableSharingWithAwsOrganizationResponse = null;
		$this->operationNotPermittedException = null;
		$this->serviceUnavailableException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->serverInternalException = null;
	}
}
