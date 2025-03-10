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
     * InvalidRequestException
     * 
     * @var mixed $invalidRequestException
     */
	
    public mixed $invalidRequestException = null;
    
	
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
    
    /**
     * ThrottledException
     * 
     * @var mixed $throttledException
     */
	
    public mixed $throttledException = null;
    
    /**
     * TooManyTagsException
     * 
     * @var mixed $tooManyTagsException
     */
	
    public mixed $tooManyTagsException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->invalidRequestException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNotFoundException = null;
		$this->tagResourceResponse = null;
		$this->throttledException = null;
		$this->tooManyTagsException = null;
	}
}
