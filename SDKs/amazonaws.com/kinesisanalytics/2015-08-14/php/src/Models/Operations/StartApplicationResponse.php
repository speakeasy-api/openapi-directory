<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class StartApplicationResponse
{
	
    public string $contentType;
    
    /**
     * InvalidApplicationConfigurationException
     * 
     * @var mixed $invalidApplicationConfigurationException
     */
	
    public mixed $invalidApplicationConfigurationException = null;
    
    /**
     * InvalidArgumentException
     * 
     * @var mixed $invalidArgumentException
     */
	
    public mixed $invalidArgumentException = null;
    
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
     * Success
     * 
     * @var ?array<string, mixed> $startApplicationResponse
     */
	
    public ?array $startApplicationResponse = null;
    
	
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
		$this->invalidApplicationConfigurationException = null;
		$this->invalidArgumentException = null;
		$this->resourceInUseException = null;
		$this->resourceNotFoundException = null;
		$this->startApplicationResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->unsupportedOperationException = null;
	}
}
