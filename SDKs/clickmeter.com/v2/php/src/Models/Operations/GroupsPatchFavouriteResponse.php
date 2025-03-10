<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GroupsPatchFavouriteResponse
{
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ApiCoreResponsesEntityUriSystemInt64 $apiCoreResponsesEntityUriSystemInt64 = null;
    
	
    public ?string $body = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->apiCoreResponsesEntityUriSystemInt64 = null;
		$this->body = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
