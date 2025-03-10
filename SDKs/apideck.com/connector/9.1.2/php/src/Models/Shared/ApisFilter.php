<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
/**
 * ApisFilter - Apply filters
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ApisFilter
{
    /**
     * Status of the API. APIs with status live or beta are callable.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ApiStatusEnum $status
     */
	#[SpeakeasyMetadata('queryParam:name=status')]
    public ?ApiStatusEnum $status = null;
    
	public function __construct()
	{
		$this->status = null;
	}
}
