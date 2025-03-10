<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateModelQualityJobDefinitionResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CreateModelQualityJobDefinitionResponse $createModelQualityJobDefinitionResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CreateModelQualityJobDefinitionResponse $createModelQualityJobDefinitionResponse = null;
    
    /**
     * ResourceInUse
     * 
     * @var mixed $resourceInUse
     */
	
    public mixed $resourceInUse = null;
    
    /**
     * ResourceLimitExceeded
     * 
     * @var mixed $resourceLimitExceeded
     */
	
    public mixed $resourceLimitExceeded = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->createModelQualityJobDefinitionResponse = null;
		$this->resourceInUse = null;
		$this->resourceLimitExceeded = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
