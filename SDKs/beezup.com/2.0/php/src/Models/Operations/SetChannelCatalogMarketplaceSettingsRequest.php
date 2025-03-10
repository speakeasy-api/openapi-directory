<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class SetChannelCatalogMarketplaceSettingsRequest
{
    /**
     * Channel Catalog Id to query
     * 
     * @var string $channelCatalogId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=channelCatalogId')]
    public string $channelCatalogId;
    
    /**
     * Settings to save
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\SetChannelCatalogMarketplaceSettingsRequest $setChannelCatalogMarketplaceSettingsRequest
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\SetChannelCatalogMarketplaceSettingsRequest $setChannelCatalogMarketplaceSettingsRequest;
    
	public function __construct()
	{
		$this->channelCatalogId = "";
		$this->setChannelCatalogMarketplaceSettingsRequest = new \OpenAPI\OpenAPI\Models\Shared\SetChannelCatalogMarketplaceSettingsRequest();
	}
}
