<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest
{
    /**
     * The unique identifier of the merchant account.
     * 
     * @var string $merchantId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=merchantId')]
    public string $merchantId;
    
    /**
     * The unique identifier of the payout setting.
     * 
     * @var string $payoutSettingsId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=payoutSettingsId')]
    public string $payoutSettingsId;
    
	public function __construct()
	{
		$this->merchantId = "";
		$this->payoutSettingsId = "";
	}
}
