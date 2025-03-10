<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateKeywordRequest - A type that defines the fields for the <b>CreateKeyword</b> request.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateKeywordRequest
{
    /**
     * This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group that the corresponding keyword will be added to. This ad group must be a part of the campaign that is specified in the call URI.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller, and <a href="/api-docs/sell/marketing/resources/keywords/methods/getKeywords">getKeywords</a> to retrieve the keyword IDs for a seller's keywords.</span>
     * 
     * @var ?string $adGroupId
     */
	#[\JMS\Serializer\Annotation\SerializedName('adGroupId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $adGroupId = null;
    
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Amount $bid
     */
	#[\JMS\Serializer\Annotation\SerializedName('bid')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Amount')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Amount $bid = null;
    
    /**
     * Input the keyword into this field.
     * 
     * @var ?string $keywordText
     */
	#[\JMS\Serializer\Annotation\SerializedName('keywordText')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $keywordText = null;
    
    /**
     * A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>
     * 
     * @var ?string $matchType
     */
	#[\JMS\Serializer\Annotation\SerializedName('matchType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $matchType = null;
    
	public function __construct()
	{
		$this->adGroupId = null;
		$this->bid = null;
		$this->keywordText = null;
		$this->matchType = null;
	}
}
