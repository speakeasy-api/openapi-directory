<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListCampaignsResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListCampaignsResponse
{
    /**
     * $campaigns
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CampaignSummary> $campaigns
     */
	#[\JMS\Serializer\Annotation\SerializedName('campaigns')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CampaignSummary>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $campaigns = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('nextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->campaigns = null;
		$this->nextToken = null;
	}
}
