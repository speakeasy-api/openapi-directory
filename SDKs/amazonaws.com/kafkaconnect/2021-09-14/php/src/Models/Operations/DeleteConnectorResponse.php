<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DeleteConnectorResponse
{
    /**
     * BadRequestException
     * 
     * @var mixed $badRequestException
     */
	
    public mixed $badRequestException = null;
    
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DeleteConnectorResponse $deleteConnectorResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\DeleteConnectorResponse $deleteConnectorResponse = null;
    
    /**
     * ForbiddenException
     * 
     * @var mixed $forbiddenException
     */
	
    public mixed $forbiddenException = null;
    
    /**
     * InternalServerErrorException
     * 
     * @var mixed $internalServerErrorException
     */
	
    public mixed $internalServerErrorException = null;
    
    /**
     * NotFoundException
     * 
     * @var mixed $notFoundException
     */
	
    public mixed $notFoundException = null;
    
    /**
     * ServiceUnavailableException
     * 
     * @var mixed $serviceUnavailableException
     */
	
    public mixed $serviceUnavailableException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * TooManyRequestsException
     * 
     * @var mixed $tooManyRequestsException
     */
	
    public mixed $tooManyRequestsException = null;
    
    /**
     * UnauthorizedException
     * 
     * @var mixed $unauthorizedException
     */
	
    public mixed $unauthorizedException = null;
    
	public function __construct()
	{
		$this->badRequestException = null;
		$this->contentType = "";
		$this->deleteConnectorResponse = null;
		$this->forbiddenException = null;
		$this->internalServerErrorException = null;
		$this->notFoundException = null;
		$this->serviceUnavailableException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->tooManyRequestsException = null;
		$this->unauthorizedException = null;
	}
}
