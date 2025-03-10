<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CreateAuthorIfNotExistsForUsingPOSTRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=authorMapper')]
    public ?string $authorMapper = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=name')]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->authorMapper = null;
		$this->name = null;
	}
}
