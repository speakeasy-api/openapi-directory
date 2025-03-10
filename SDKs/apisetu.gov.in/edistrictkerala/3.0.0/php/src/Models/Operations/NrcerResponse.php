<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class NrcerResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Bad request
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Nrcer400ApplicationJSON $nrcer400ApplicationJSONObject
     */
	
    public ?Nrcer400ApplicationJSON $nrcer400ApplicationJSONObject = null;
    
    /**
     * Unauthorized access
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Nrcer401ApplicationJSON $nrcer401ApplicationJSONObject
     */
	
    public ?Nrcer401ApplicationJSON $nrcer401ApplicationJSONObject = null;
    
    /**
     * No record found
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Nrcer404ApplicationJSON $nrcer404ApplicationJSONObject
     */
	
    public ?Nrcer404ApplicationJSON $nrcer404ApplicationJSONObject = null;
    
    /**
     * Internal server error
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Nrcer500ApplicationJSON $nrcer500ApplicationJSONObject
     */
	
    public ?Nrcer500ApplicationJSON $nrcer500ApplicationJSONObject = null;
    
    /**
     * Bad gateway
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Nrcer502ApplicationJSON $nrcer502ApplicationJSONObject
     */
	
    public ?Nrcer502ApplicationJSON $nrcer502ApplicationJSONObject = null;
    
    /**
     * Service unavailable
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Nrcer503ApplicationJSON $nrcer503ApplicationJSONObject
     */
	
    public ?Nrcer503ApplicationJSON $nrcer503ApplicationJSONObject = null;
    
    /**
     * Gateway timeout
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Nrcer504ApplicationJSON $nrcer504ApplicationJSONObject
     */
	
    public ?Nrcer504ApplicationJSON $nrcer504ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->nrcer400ApplicationJSONObject = null;
		$this->nrcer401ApplicationJSONObject = null;
		$this->nrcer404ApplicationJSONObject = null;
		$this->nrcer500ApplicationJSONObject = null;
		$this->nrcer502ApplicationJSONObject = null;
		$this->nrcer503ApplicationJSONObject = null;
		$this->nrcer504ApplicationJSONObject = null;
	}
}
