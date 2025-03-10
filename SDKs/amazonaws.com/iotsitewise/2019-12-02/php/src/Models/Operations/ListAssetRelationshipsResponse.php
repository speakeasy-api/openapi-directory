<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListAssetRelationshipsResponse
{
	
    public string $contentType;
    
    /**
     * InternalFailureException
     * 
     * @var mixed $internalFailureException
     */
	
    public mixed $internalFailureException = null;
    
    /**
     * InvalidRequestException
     * 
     * @var mixed $invalidRequestException
     */
	
    public mixed $invalidRequestException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListAssetRelationshipsResponse $listAssetRelationshipsResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListAssetRelationshipsResponse $listAssetRelationshipsResponse = null;
    
	
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
		$this->contentType = "";
		$this->internalFailureException = null;
		$this->invalidRequestException = null;
		$this->listAssetRelationshipsResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNotFoundException = null;
		$this->throttlingException = null;
	}
}
