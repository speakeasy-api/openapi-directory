<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateIntegrationResponse
{
    /**
     * BadRequestException
     * 
     * @var mixed $badRequestException
     */
	
    public mixed $badRequestException = null;
    
    /**
     * ConflictException
     * 
     * @var mixed $conflictException
     */
	
    public mixed $conflictException = null;
    
	
    public string $contentType;
    
    /**
     * NotFoundException
     * 
     * @var mixed $notFoundException
     */
	
    public mixed $notFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * TooManyRequestsException
     * 
     * @var mixed $tooManyRequestsException
     */
	
    public mixed $tooManyRequestsException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\UpdateIntegrationResult $updateIntegrationResult
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\UpdateIntegrationResult $updateIntegrationResult = null;
    
	public function __construct()
	{
		$this->badRequestException = null;
		$this->conflictException = null;
		$this->contentType = "";
		$this->notFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->tooManyRequestsException = null;
		$this->updateIntegrationResult = null;
	}
}
