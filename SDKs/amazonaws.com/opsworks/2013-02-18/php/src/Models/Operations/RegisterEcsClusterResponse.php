<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class RegisterEcsClusterResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\RegisterEcsClusterResult $registerEcsClusterResult
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\RegisterEcsClusterResult $registerEcsClusterResult = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ValidationException
     * 
     * @var mixed $validationException
     */
	
    public mixed $validationException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->registerEcsClusterResult = null;
		$this->resourceNotFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->validationException = null;
	}
}
