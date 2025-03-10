<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class AssociateDiscoveredResourceResponse
{
    /**
     * AccessDeniedException
     * 
     * @var mixed $accessDeniedException
     */
	
    public mixed $accessDeniedException = null;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $associateDiscoveredResourceResult
     */
	
    public ?array $associateDiscoveredResourceResult = null;
    
	
    public string $contentType;
    
    /**
     * DryRunOperation
     * 
     * @var mixed $dryRunOperation
     */
	
    public mixed $dryRunOperation = null;
    
    /**
     * HomeRegionNotSetException
     * 
     * @var mixed $homeRegionNotSetException
     */
	
    public mixed $homeRegionNotSetException = null;
    
    /**
     * InternalServerError
     * 
     * @var mixed $internalServerError
     */
	
    public mixed $internalServerError = null;
    
    /**
     * InvalidInputException
     * 
     * @var mixed $invalidInputException
     */
	
    public mixed $invalidInputException = null;
    
    /**
     * PolicyErrorException
     * 
     * @var mixed $policyErrorException
     */
	
    public mixed $policyErrorException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
    /**
     * ServiceUnavailableException
     * 
     * @var mixed $serviceUnavailableException
     */
	
    public mixed $serviceUnavailableException = null;
    
    /**
     * ThrottlingException
     * 
     * @var mixed $throttlingException
     */
	
    public mixed $throttlingException = null;
    
    /**
     * UnauthorizedOperation
     * 
     * @var mixed $unauthorizedOperation
     */
	
    public mixed $unauthorizedOperation = null;
    
	public function __construct()
	{
		$this->accessDeniedException = null;
		$this->associateDiscoveredResourceResult = null;
		$this->contentType = "";
		$this->dryRunOperation = null;
		$this->homeRegionNotSetException = null;
		$this->internalServerError = null;
		$this->invalidInputException = null;
		$this->policyErrorException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNotFoundException = null;
		$this->serviceUnavailableException = null;
		$this->throttlingException = null;
		$this->unauthorizedOperation = null;
	}
}
