<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class TokensPartnerRewardHistoryResponse
{
    /**
     * $partnerOffers
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\TokensPartnerOfferSkuHistoryResponse> $partnerOffers
     */
	
    public ?array $partnerOffers = null;
    
    /**
     * $twitchDrops
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\TokensTwitchDropHistoryResponse> $twitchDrops
     */
	
    public ?array $twitchDrops = null;
    
	public function __construct()
	{
		$this->partnerOffers = null;
		$this->twitchDrops = null;
	}
}
