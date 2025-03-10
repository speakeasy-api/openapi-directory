<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CloneCampaignRequest
{
    /**
     * This type defines the fields for a clone campaign request.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\CloneCampaignRequest $cloneCampaignRequest
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\CloneCampaignRequest $cloneCampaignRequest;
    
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. This ID is the campaign ID of the campaign being cloned.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     * 
     * @var string $campaignId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=campaign_id')]
    public string $campaignId;
    
	public function __construct()
	{
		$this->cloneCampaignRequest = new \OpenAPI\OpenAPI\Models\Shared\CloneCampaignRequest();
		$this->campaignId = "";
	}
}
