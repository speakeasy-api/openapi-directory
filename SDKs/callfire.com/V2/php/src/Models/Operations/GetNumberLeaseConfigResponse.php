<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetNumberLeaseConfigResponse
{
	
    public string $contentType;
    
    /**
     * Bad request
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorResponse $errorResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ErrorResponse $errorResponse = null;
    
    /**
     * successful operation
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\NumberConfig $numberConfig
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\NumberConfig $numberConfig = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->errorResponse = null;
		$this->numberConfig = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
