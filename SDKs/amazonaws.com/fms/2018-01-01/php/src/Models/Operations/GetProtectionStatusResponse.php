<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetProtectionStatusResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GetProtectionStatusResponse $getProtectionStatusResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\GetProtectionStatusResponse $getProtectionStatusResponse = null;
    
    /**
     * InternalErrorException
     * 
     * @var mixed $internalErrorException
     */
	
    public mixed $internalErrorException = null;
    
    /**
     * InvalidInputException
     * 
     * @var mixed $invalidInputException
     */
	
    public mixed $invalidInputException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->getProtectionStatusResponse = null;
		$this->internalErrorException = null;
		$this->invalidInputException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNotFoundException = null;
	}
}
