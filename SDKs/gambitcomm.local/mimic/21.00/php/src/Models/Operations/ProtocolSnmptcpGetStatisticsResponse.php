<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ProtocolSnmptcpGetStatisticsResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * successful operation
     * 
     * @var ?array<int> $protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers
     */
	
    public ?array $protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers = null;
	}
}
