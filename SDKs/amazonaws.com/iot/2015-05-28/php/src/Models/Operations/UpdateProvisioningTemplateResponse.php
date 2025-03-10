<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateProvisioningTemplateResponse
{
    /**
     * ConflictingResourceUpdateException
     * 
     * @var mixed $conflictingResourceUpdateException
     */
	
    public mixed $conflictingResourceUpdateException = null;
    
	
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
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * UnauthorizedException
     * 
     * @var mixed $unauthorizedException
     */
	
    public mixed $unauthorizedException = null;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $updateProvisioningTemplateResponse
     */
	
    public ?array $updateProvisioningTemplateResponse = null;
    
	public function __construct()
	{
		$this->conflictingResourceUpdateException = null;
		$this->contentType = "";
		$this->internalFailureException = null;
		$this->invalidRequestException = null;
		$this->resourceNotFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->unauthorizedException = null;
		$this->updateProvisioningTemplateResponse = null;
	}
}
