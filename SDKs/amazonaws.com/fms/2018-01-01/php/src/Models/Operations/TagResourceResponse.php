<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class TagResourceResponse
{
	
    public string $contentType;
    
    /**
     * InternalErrorException
     * 
     * @var mixed $internalErrorException
     */
	
    public mixed $internalErrorException = null;
    
    /**
     * InvalidInputException
     * 
     * @var mixed $invalidInputException
     */
	
    public mixed $invalidInputException = null;
    
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
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $tagResourceResponse
     */
	
    public ?array $tagResourceResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->internalErrorException = null;
		$this->invalidInputException = null;
		$this->invalidOperationException = null;
		$this->limitExceededException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNotFoundException = null;
		$this->tagResourceResponse = null;
	}
}
