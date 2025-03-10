<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GETAnalyticsDataUsingGETResponse
{
    /**
     * OK
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AnalyticsDataSwaggerModel> $analyticsDataSwaggerModels
     */
	
    public ?array $analyticsDataSwaggerModels = null;
    
	
    public string $contentType;
    
    /**
     * json error
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\MessageModel $messageModel
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\MessageModel $messageModel = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->analyticsDataSwaggerModels = null;
		$this->contentType = "";
		$this->messageModel = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
