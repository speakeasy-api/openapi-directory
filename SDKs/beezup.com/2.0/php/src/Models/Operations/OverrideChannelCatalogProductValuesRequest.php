<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class OverrideChannelCatalogProductValuesRequest
{
    /**
     * $requestBody
     * 
     * @var array<string, string> $requestBody
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public array $requestBody;
    
    /**
     * The channel catalog identifier
     * 
     * @var string $channelCatalogId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=channelCatalogId')]
    public string $channelCatalogId;
    
    /**
     * The product identifier
     * 
     * @var string $productId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=productId')]
    public string $productId;
    
	public function __construct()
	{
		$this->requestBody = [];
		$this->channelCatalogId = "";
		$this->productId = "";
	}
}
