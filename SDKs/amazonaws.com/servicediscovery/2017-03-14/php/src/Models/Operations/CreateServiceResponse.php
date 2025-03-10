<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateServiceResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CreateServiceResponse $createServiceResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CreateServiceResponse $createServiceResponse = null;
    
    /**
     * InvalidInput
     * 
     * @var mixed $invalidInput
     */
	
    public mixed $invalidInput = null;
    
    /**
     * NamespaceNotFound
     * 
     * @var mixed $namespaceNotFound
     */
	
    public mixed $namespaceNotFound = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ResourceLimitExceeded
     * 
     * @var mixed $resourceLimitExceeded
     */
	
    public mixed $resourceLimitExceeded = null;
    
    /**
     * ServiceAlreadyExists
     * 
     * @var mixed $serviceAlreadyExists
     */
	
    public mixed $serviceAlreadyExists = null;
    
    /**
     * TooManyTagsException
     * 
     * @var mixed $tooManyTagsException
     */
	
    public mixed $tooManyTagsException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->createServiceResponse = null;
		$this->invalidInput = null;
		$this->namespaceNotFound = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceLimitExceeded = null;
		$this->serviceAlreadyExists = null;
		$this->tooManyTagsException = null;
	}
}
