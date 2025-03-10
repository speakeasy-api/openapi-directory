<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateUserPoolDomainResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CreateUserPoolDomainResponse $createUserPoolDomainResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CreateUserPoolDomainResponse $createUserPoolDomainResponse = null;
    
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
     * LimitExceededException
     * 
     * @var mixed $limitExceededException
     */
	
    public mixed $limitExceededException = null;
    
    /**
     * NotAuthorizedException
     * 
     * @var mixed $notAuthorizedException
     */
	
    public mixed $notAuthorizedException = null;
    
	
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
		$this->createUserPoolDomainResponse = null;
		$this->internalErrorException = null;
		$this->invalidParameterException = null;
		$this->limitExceededException = null;
		$this->notAuthorizedException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNotFoundException = null;
	}
}
