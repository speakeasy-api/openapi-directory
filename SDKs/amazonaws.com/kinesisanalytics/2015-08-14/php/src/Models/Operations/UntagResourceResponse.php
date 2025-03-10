<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UntagResourceResponse
{
    /**
     * ConcurrentModificationException
     * 
     * @var mixed $concurrentModificationException
     */
	
    public mixed $concurrentModificationException = null;
    
	
    public string $contentType;
    
    /**
     * InvalidArgumentException
     * 
     * @var mixed $invalidArgumentException
     */
	
    public mixed $invalidArgumentException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ResourceInUseException
     * 
     * @var mixed $resourceInUseException
     */
	
    public mixed $resourceInUseException = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
    /**
     * TooManyTagsException
     * 
     * @var mixed $tooManyTagsException
     */
	
    public mixed $tooManyTagsException = null;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $untagResourceResponse
     */
	
    public ?array $untagResourceResponse = null;
    
	public function __construct()
	{
		$this->concurrentModificationException = null;
		$this->contentType = "";
		$this->invalidArgumentException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceInUseException = null;
		$this->resourceNotFoundException = null;
		$this->tooManyTagsException = null;
		$this->untagResourceResponse = null;
	}
}
