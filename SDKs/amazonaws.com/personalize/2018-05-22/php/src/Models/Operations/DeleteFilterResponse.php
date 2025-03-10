<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DeleteFilterResponse
{
	
    public string $contentType;
    
    /**
     * InvalidInputException
     * 
     * @var mixed $invalidInputException
     */
	
    public mixed $invalidInputException = null;
    
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
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->invalidInputException = null;
		$this->resourceInUseException = null;
		$this->resourceNotFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
