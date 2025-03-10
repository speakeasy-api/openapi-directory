<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class Subscribeaddress3Response
{
	
    public string $contentType;
    
    /**
     * $headers
     * 
     * @var ?array<string, array<string>> $headers
     */
	
    public ?array $headers = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * subscribeAddress
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\Subscribeaddress3200ApplicationJSON $subscribeaddress3200ApplicationJSONObject
     */
	
    public ?Subscribeaddress3200ApplicationJSON $subscribeaddress3200ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->headers = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->subscribeaddress3200ApplicationJSONObject = null;
	}
}
