<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PatchFormFieldSetsIdRequest
{
    /**
     * Form Field Set ID.
     * 
     * @var int $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public int $id;
    
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\PatchFormFieldSets $patchFormFieldSets;
    
	public function __construct()
	{
		$this->id = 0;
		$this->patchFormFieldSets = new \OpenAPI\OpenAPI\Models\Shared\PatchFormFieldSets();
	}
}
