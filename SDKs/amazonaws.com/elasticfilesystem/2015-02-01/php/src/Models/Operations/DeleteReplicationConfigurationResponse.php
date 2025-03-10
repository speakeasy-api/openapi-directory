<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DeleteReplicationConfigurationResponse
{
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
    
    /**
     * ReplicationNotFound
     * 
     * @var mixed $replicationNotFound
     */
	
    public mixed $replicationNotFound = null;
    
	public function __construct()
	{
		$this->badRequest = null;
		$this->contentType = "";
		$this->fileSystemNotFound = null;
		$this->internalServerError = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->replicationNotFound = null;
	}
}
