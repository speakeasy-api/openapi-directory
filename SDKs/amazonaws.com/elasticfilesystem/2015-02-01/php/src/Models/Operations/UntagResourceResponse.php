<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UntagResourceResponse
{
    /**
     * AccessPointNotFound
     * 
     * @var mixed $accessPointNotFound
     */
	
    public mixed $accessPointNotFound = null;
    
    /**
     * BadRequest
     * 
     * @var mixed $badRequest
     */
	
    public mixed $badRequest = null;
    
	
    public string $contentType;
    
    /**
     * FileSystemNotFound
     * 
     * @var mixed $fileSystemNotFound
     */
	
    public mixed $fileSystemNotFound = null;
    
    /**
     * InternalServerError
     * 
     * @var mixed $internalServerError
     */
	
    public mixed $internalServerError = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->accessPointNotFound = null;
		$this->badRequest = null;
		$this->contentType = "";
		$this->fileSystemNotFound = null;
		$this->internalServerError = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
