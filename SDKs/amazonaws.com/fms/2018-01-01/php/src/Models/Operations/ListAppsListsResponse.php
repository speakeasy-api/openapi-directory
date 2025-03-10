<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListAppsListsResponse
{
	
    public string $contentType;
    
    /**
     * InternalErrorException
     * 
     * @var mixed $internalErrorException
     */
	
    public mixed $internalErrorException = null;
    
    /**
     * InvalidOperationException
     * 
     * @var mixed $invalidOperationException
     */
	
    public mixed $invalidOperationException = null;
    
    /**
     * LimitExceededException
     * 
     * @var mixed $limitExceededException
     */
	
    public mixed $limitExceededException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListAppsListsResponse $listAppsListsResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListAppsListsResponse $listAppsListsResponse = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->internalErrorException = null;
		$this->invalidOperationException = null;
		$this->limitExceededException = null;
		$this->listAppsListsResponse = null;
		$this->resourceNotFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
