<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetCallRequest
{
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     * 
     * @var ?string $fields
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=fields')]
    public ?string $fields = null;
    
    /**
     * An id of a call
     * 
     * @var int $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public int $id;
    
	public function __construct()
	{
		$this->fields = null;
		$this->id = 0;
	}
}
