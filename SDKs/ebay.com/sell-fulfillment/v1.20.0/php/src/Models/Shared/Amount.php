<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Amount - This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Amount
{
    /**
     * A three-letter ISO 4217 code that indicates the currency of the amount in the <b>convertedFromValue</b> field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
     * 
     * @var ?string $convertedFromCurrency
     */
	#[\JMS\Serializer\Annotation\SerializedName('convertedFromCurrency')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $convertedFromCurrency = null;
    
    /**
     * The monetary amount before any conversion is performed, in the currency specified by the <b>convertedFromCurrency</b> field. This value is required or returned only if currency conversion/localization is required. The <b>value</b> field contains the converted amount of this value, in the currency specified by the <b>currency</b> field.
     * 
     * @var ?string $convertedFromValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('convertedFromValue')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $convertedFromValue = null;
    
    /**
     * A three-letter ISO 4217 code that indicates the currency of the amount in the <b>value</b> field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the <b>value</b> field.<br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
     * 
     * @var ?string $currency
     */
	#[\JMS\Serializer\Annotation\SerializedName('currency')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $currency = null;
    
    /**
     * The monetary amount, in the currency specified by the <b>currency</b> field. If currency conversion/localization is required, this value is the converted amount, and the <b>convertedFromValue</b> field contains the amount in the original currency.  <br><br><i>Required in</i> the <b>amount</b> type.
     * 
     * @var ?string $value
     */
	#[\JMS\Serializer\Annotation\SerializedName('value')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $value = null;
    
	public function __construct()
	{
		$this->convertedFromCurrency = null;
		$this->convertedFromValue = null;
		$this->currency = null;
		$this->value = null;
	}
}
