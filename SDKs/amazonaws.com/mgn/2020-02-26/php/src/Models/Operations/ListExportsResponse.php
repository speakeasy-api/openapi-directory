<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListExportsResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListExportsResponse $listExportsResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListExportsResponse $listExportsResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * UninitializedAccountException
     * 
     * @var mixed $uninitializedAccountException
     */
	
    public mixed $uninitializedAccountException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->listExportsResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->uninitializedAccountException = null;
	}
}
