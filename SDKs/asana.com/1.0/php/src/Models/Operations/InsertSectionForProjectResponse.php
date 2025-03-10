<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class InsertSectionForProjectResponse
{
	
    public string $contentType;
    
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorResponse $errorResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ErrorResponse $errorResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Successfully moved the specified section.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\InsertSectionForProject200ApplicationJSON $insertSectionForProject200ApplicationJSONObject
     */
	
    public ?InsertSectionForProject200ApplicationJSON $insertSectionForProject200ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->errorResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->insertSectionForProject200ApplicationJSONObject = null;
	}
}
