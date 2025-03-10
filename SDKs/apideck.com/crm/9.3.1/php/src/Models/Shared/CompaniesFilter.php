<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
/**
 * CompaniesFilter - Apply filters
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CompaniesFilter
{
    /**
     * Name of the company to filter on
     * 
     * @var ?string $name
     */
	#[SpeakeasyMetadata('queryParam:name=name')]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->name = null;
	}
}
