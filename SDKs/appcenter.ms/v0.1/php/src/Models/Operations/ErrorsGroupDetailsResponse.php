<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ErrorsGroupDetailsResponse
{
	
    public string $contentType;
    
    /**
     * Error group details
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ErrorsGroupDetails200ApplicationJSON $errorsGroupDetails200ApplicationJSONObject
     */
	
    public ?ErrorsGroupDetails200ApplicationJSON $errorsGroupDetails200ApplicationJSONObject = null;
    
    /**
     * Error code with reason
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ErrorsGroupDetailsDefaultApplicationJSON $errorsGroupDetailsDefaultApplicationJSONObject
     */
	
    public ?ErrorsGroupDetailsDefaultApplicationJSON $errorsGroupDetailsDefaultApplicationJSONObject = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->errorsGroupDetails200ApplicationJSONObject = null;
		$this->errorsGroupDetailsDefaultApplicationJSONObject = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
