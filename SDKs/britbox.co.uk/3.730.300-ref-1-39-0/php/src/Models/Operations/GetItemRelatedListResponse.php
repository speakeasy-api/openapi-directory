<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetItemRelatedListResponse
{
	
    public string $contentType;
    
    /**
     * The list of items requested.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ItemList $itemList
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ItemList $itemList = null;
    
    /**
     * Bad request.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ServiceError $serviceError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ServiceError $serviceError = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->itemList = null;
		$this->serviceError = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
