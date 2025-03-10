<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetOrderResponse
{
    /**
     * Requested Order could not be found
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BeezUPCommonErrorResponseMessage $beezUPCommonErrorResponseMessage
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\BeezUPCommonErrorResponseMessage $beezUPCommonErrorResponseMessage = null;
    
	
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
     * Successfully fetched Order and Order Item(s) properties
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Order $order
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Order $order = null;
    
	public function __construct()
	{
		$this->beezUPCommonErrorResponseMessage = null;
		$this->contentType = "";
		$this->headers = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->order = null;
	}
}
