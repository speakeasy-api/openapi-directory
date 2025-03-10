<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class RsbycResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Bad request
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Rsbyc400ApplicationJSON $rsbyc400ApplicationJSONObject
     */
	
    public ?Rsbyc400ApplicationJSON $rsbyc400ApplicationJSONObject = null;
    
    /**
     * Unauthorized access
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Rsbyc401ApplicationJSON $rsbyc401ApplicationJSONObject
     */
	
    public ?Rsbyc401ApplicationJSON $rsbyc401ApplicationJSONObject = null;
    
    /**
     * No record found
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Rsbyc404ApplicationJSON $rsbyc404ApplicationJSONObject
     */
	
    public ?Rsbyc404ApplicationJSON $rsbyc404ApplicationJSONObject = null;
    
    /**
     * Internal server error
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Rsbyc500ApplicationJSON $rsbyc500ApplicationJSONObject
     */
	
    public ?Rsbyc500ApplicationJSON $rsbyc500ApplicationJSONObject = null;
    
    /**
     * Bad gateway
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Rsbyc502ApplicationJSON $rsbyc502ApplicationJSONObject
     */
	
    public ?Rsbyc502ApplicationJSON $rsbyc502ApplicationJSONObject = null;
    
    /**
     * Service unavailable
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Rsbyc503ApplicationJSON $rsbyc503ApplicationJSONObject
     */
	
    public ?Rsbyc503ApplicationJSON $rsbyc503ApplicationJSONObject = null;
    
    /**
     * Gateway timeout
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Rsbyc504ApplicationJSON $rsbyc504ApplicationJSONObject
     */
	
    public ?Rsbyc504ApplicationJSON $rsbyc504ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->rsbyc400ApplicationJSONObject = null;
		$this->rsbyc401ApplicationJSONObject = null;
		$this->rsbyc404ApplicationJSONObject = null;
		$this->rsbyc500ApplicationJSONObject = null;
		$this->rsbyc502ApplicationJSONObject = null;
		$this->rsbyc503ApplicationJSONObject = null;
		$this->rsbyc504ApplicationJSONObject = null;
	}
}
