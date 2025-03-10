<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * KeywordRequest - A type that defines the fields used by the <b>Keyword</b> method.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class KeywordRequest
{
    /**
     * The text of the keyword. Keywords are not case sensitive and compound words can be used without additional encoding (for example, tennis ball).<br /><br /><b>Maximum number of characters: </b>100 <br /><br /><b>Maximum number of words: </b>10 
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
		$this->keywordText = null;
		$this->matchType = null;
	}
}
