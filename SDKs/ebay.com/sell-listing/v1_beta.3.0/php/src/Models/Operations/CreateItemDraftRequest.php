<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CreateItemDraftRequest
{
    /**
     * Use this header to specify the natural language of the seller. For details, see Content-Language in HTTP request headers. Required: For EBAY_CA in French. (Content-Language = fr-CA)
     * 
     * @var ?string $contentLanguage
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Content-Language')]
    public ?string $contentLanguage = null;
    
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?\OpenAPI\OpenAPI\Models\Shared\ItemDraft $itemDraft = null;
    
    /**
     * Use this header to specify an eBay marketplace ID. For a list of supported sites, see API Restrictions in the Listing API overview.
     * 
     * @var string $xEbayCMarketplaceId
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID')]
    public string $xEbayCMarketplaceId;
    
	public function __construct()
	{
		$this->contentLanguage = null;
		$this->itemDraft = null;
		$this->xEbayCMarketplaceId = "";
	}
}
