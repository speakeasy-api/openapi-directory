<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
/**
 * ModifierGroupFilter - Apply filters
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ModifierGroupFilter
{
    /**
     * Id of the job to filter on
     * 
     * @var ?string $modifierGroupId
     */
	#[SpeakeasyMetadata('queryParam:name=modifier_group_id')]
    public ?string $modifierGroupId = null;
    
	public function __construct()
	{
		$this->modifierGroupId = null;
	}
}
