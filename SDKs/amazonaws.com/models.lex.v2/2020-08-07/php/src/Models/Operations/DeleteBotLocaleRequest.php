<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class DeleteBotLocaleRequest
{
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Algorithm')]
    public ?string $xAmzAlgorithm = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Content-Sha256')]
    public ?string $xAmzContentSha256 = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Credential')]
    public ?string $xAmzCredential = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Date')]
    public ?string $xAmzDate = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Security-Token')]
    public ?string $xAmzSecurityToken = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Signature')]
    public ?string $xAmzSignature = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-SignedHeaders')]
    public ?string $xAmzSignedHeaders = null;
    
    /**
     * The unique identifier of the bot that contains the locale.
     * 
     * @var string $botId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=botId')]
    public string $botId;
    
    /**
     * The version of the bot that contains the locale. 
     * 
     * @var string $botVersion
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=botVersion')]
    public string $botVersion;
    
    /**
     * The identifier of the language and locale that will be deleted. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     * 
     * @var string $localeId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=localeId')]
    public string $localeId;
    
	public function __construct()
	{
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
		$this->botId = "";
		$this->botVersion = "";
		$this->localeId = "";
	}
}
