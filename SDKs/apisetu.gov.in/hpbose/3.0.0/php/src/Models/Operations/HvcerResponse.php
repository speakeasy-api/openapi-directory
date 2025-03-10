<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class HvcerResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Bad request
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Hvcer400ApplicationJSON $hvcer400ApplicationJSONObject
     */
	
    public ?Hvcer400ApplicationJSON $hvcer400ApplicationJSONObject = null;
    
    /**
     * Unauthorized access
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Hvcer401ApplicationJSON $hvcer401ApplicationJSONObject
     */
	
    public ?Hvcer401ApplicationJSON $hvcer401ApplicationJSONObject = null;
    
    /**
     * No record found
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Hvcer404ApplicationJSON $hvcer404ApplicationJSONObject
     */
	
    public ?Hvcer404ApplicationJSON $hvcer404ApplicationJSONObject = null;
    
    /**
     * Internal server error
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Hvcer500ApplicationJSON $hvcer500ApplicationJSONObject
     */
	
    public ?Hvcer500ApplicationJSON $hvcer500ApplicationJSONObject = null;
    
    /**
     * Bad gateway
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Hvcer502ApplicationJSON $hvcer502ApplicationJSONObject
     */
	
    public ?Hvcer502ApplicationJSON $hvcer502ApplicationJSONObject = null;
    
    /**
     * Service unavailable
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Hvcer503ApplicationJSON $hvcer503ApplicationJSONObject
     */
	
    public ?Hvcer503ApplicationJSON $hvcer503ApplicationJSONObject = null;
    
    /**
     * Gateway timeout
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Hvcer504ApplicationJSON $hvcer504ApplicationJSONObject
     */
	
    public ?Hvcer504ApplicationJSON $hvcer504ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->hvcer400ApplicationJSONObject = null;
		$this->hvcer401ApplicationJSONObject = null;
		$this->hvcer404ApplicationJSONObject = null;
		$this->hvcer500ApplicationJSONObject = null;
		$this->hvcer502ApplicationJSONObject = null;
		$this->hvcer503ApplicationJSONObject = null;
		$this->hvcer504ApplicationJSONObject = null;
	}
}
