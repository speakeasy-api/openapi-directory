<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CopyPadUsingGETResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ok (code 0)
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CopyPadUsingGET200ApplicationJSON $copyPadUsingGET200ApplicationJSONObject
     */
	
    public ?CopyPadUsingGET200ApplicationJSON $copyPadUsingGET200ApplicationJSONObject = null;
    
    /**
     * generic api error (code 1)
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CopyPadUsingGET400ApplicationJSON $copyPadUsingGET400ApplicationJSONObject
     */
	
    public ?CopyPadUsingGET400ApplicationJSON $copyPadUsingGET400ApplicationJSONObject = null;
    
    /**
     * no or wrong API key (code 4)
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CopyPadUsingGET401ApplicationJSON $copyPadUsingGET401ApplicationJSONObject
     */
	
    public ?CopyPadUsingGET401ApplicationJSON $copyPadUsingGET401ApplicationJSONObject = null;
    
    /**
     * internal api error (code 2)
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CopyPadUsingGET500ApplicationJSON $copyPadUsingGET500ApplicationJSONObject
     */
	
    public ?CopyPadUsingGET500ApplicationJSON $copyPadUsingGET500ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->copyPadUsingGET200ApplicationJSONObject = null;
		$this->copyPadUsingGET400ApplicationJSONObject = null;
		$this->copyPadUsingGET401ApplicationJSONObject = null;
		$this->copyPadUsingGET500ApplicationJSONObject = null;
	}
}
