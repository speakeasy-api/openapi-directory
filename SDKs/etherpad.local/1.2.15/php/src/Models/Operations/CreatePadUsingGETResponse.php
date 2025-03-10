<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreatePadUsingGETResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ok (code 0)
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CreatePadUsingGET200ApplicationJSON $createPadUsingGET200ApplicationJSONObject
     */
	
    public ?CreatePadUsingGET200ApplicationJSON $createPadUsingGET200ApplicationJSONObject = null;
    
    /**
     * generic api error (code 1)
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CreatePadUsingGET400ApplicationJSON $createPadUsingGET400ApplicationJSONObject
     */
	
    public ?CreatePadUsingGET400ApplicationJSON $createPadUsingGET400ApplicationJSONObject = null;
    
    /**
     * no or wrong API key (code 4)
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CreatePadUsingGET401ApplicationJSON $createPadUsingGET401ApplicationJSONObject
     */
	
    public ?CreatePadUsingGET401ApplicationJSON $createPadUsingGET401ApplicationJSONObject = null;
    
    /**
     * internal api error (code 2)
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CreatePadUsingGET500ApplicationJSON $createPadUsingGET500ApplicationJSONObject
     */
	
    public ?CreatePadUsingGET500ApplicationJSON $createPadUsingGET500ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->createPadUsingGET200ApplicationJSONObject = null;
		$this->createPadUsingGET400ApplicationJSONObject = null;
		$this->createPadUsingGET401ApplicationJSONObject = null;
		$this->createPadUsingGET500ApplicationJSONObject = null;
	}
}
