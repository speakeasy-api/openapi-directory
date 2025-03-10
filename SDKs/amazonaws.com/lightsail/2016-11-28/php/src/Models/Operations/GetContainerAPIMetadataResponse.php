<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetContainerAPIMetadataResponse
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
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GetContainerAPIMetadataResult $getContainerAPIMetadataResult
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\GetContainerAPIMetadataResult $getContainerAPIMetadataResult = null;
    
    /**
     * ServiceException
     * 
     * @var mixed $serviceException
     */
	
    public mixed $serviceException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * UnauthenticatedException
     * 
     * @var mixed $unauthenticatedException
     */
	
    public mixed $unauthenticatedException = null;
    
	public function __construct()
	{
		$this->accessDeniedException = null;
		$this->contentType = "";
		$this->getContainerAPIMetadataResult = null;
		$this->serviceException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->unauthenticatedException = null;
	}
}
