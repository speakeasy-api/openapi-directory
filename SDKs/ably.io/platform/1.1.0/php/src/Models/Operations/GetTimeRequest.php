<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetTimeRequest
{
    /**
     * The version of the API you wish to use.
     * 
     * @var ?string $xAblyVersion
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Ably-Version')]
    public ?string $xAblyVersion = null;
    
    /**
     * The response format you would like
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum $format
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=format')]
    public ?\OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum $format = null;
    
	public function __construct()
	{
		$this->xAblyVersion = null;
		$this->format = null;
	}
}
