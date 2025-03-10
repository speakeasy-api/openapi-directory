<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class SetIdentityPoolRolesResponse
{
    /**
     * ConcurrentModificationException
     * 
     * @var mixed $concurrentModificationException
     */
	
    public mixed $concurrentModificationException = null;
    
	
    public string $contentType;
    
    /**
     * InternalErrorException
     * 
     * @var mixed $internalErrorException
     */
	
    public mixed $internalErrorException = null;
    
    /**
     * InvalidParameterException
     * 
     * @var mixed $invalidParameterException
     */
	
    public mixed $invalidParameterException = null;
    
    /**
     * NotAuthorizedException
     * 
     * @var mixed $notAuthorizedException
     */
	
    public mixed $notAuthorizedException = null;
    
    /**
     * ResourceConflictException
     * 
     * @var mixed $resourceConflictException
     */
	
    public mixed $resourceConflictException = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * TooManyRequestsException
     * 
     * @var mixed $tooManyRequestsException
     */
	
    public mixed $tooManyRequestsException = null;
    
	public function __construct()
	{
		$this->concurrentModificationException = null;
		$this->contentType = "";
		$this->internalErrorException = null;
		$this->invalidParameterException = null;
		$this->notAuthorizedException = null;
		$this->resourceConflictException = null;
		$this->resourceNotFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->tooManyRequestsException = null;
	}
}
