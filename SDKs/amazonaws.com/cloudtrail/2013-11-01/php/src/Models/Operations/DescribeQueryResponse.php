<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DescribeQueryResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DescribeQueryResponse $describeQueryResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\DescribeQueryResponse $describeQueryResponse = null;
    
    /**
     * EventDataStoreARNInvalidException
     * 
     * @var mixed $eventDataStoreARNInvalidException
     */
	
    public mixed $eventDataStoreARNInvalidException = null;
    
    /**
     * EventDataStoreNotFoundException
     * 
     * @var mixed $eventDataStoreNotFoundException
     */
	
    public mixed $eventDataStoreNotFoundException = null;
    
    /**
     * InactiveEventDataStoreException
     * 
     * @var mixed $inactiveEventDataStoreException
     */
	
    public mixed $inactiveEventDataStoreException = null;
    
    /**
     * InvalidParameterException
     * 
     * @var mixed $invalidParameterException
     */
	
    public mixed $invalidParameterException = null;
    
    /**
     * NoManagementAccountSLRExistsException
     * 
     * @var mixed $noManagementAccountSLRExistsException
     */
	
    public mixed $noManagementAccountSLRExistsException = null;
    
    /**
     * OperationNotPermittedException
     * 
     * @var mixed $operationNotPermittedException
     */
	
    public mixed $operationNotPermittedException = null;
    
    /**
     * QueryIdNotFoundException
     * 
     * @var mixed $queryIdNotFoundException
     */
	
    public mixed $queryIdNotFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * UnsupportedOperationException
     * 
     * @var mixed $unsupportedOperationException
     */
	
    public mixed $unsupportedOperationException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->describeQueryResponse = null;
		$this->eventDataStoreARNInvalidException = null;
		$this->eventDataStoreNotFoundException = null;
		$this->inactiveEventDataStoreException = null;
		$this->invalidParameterException = null;
		$this->noManagementAccountSLRExistsException = null;
		$this->operationNotPermittedException = null;
		$this->queryIdNotFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->unsupportedOperationException = null;
	}
}
