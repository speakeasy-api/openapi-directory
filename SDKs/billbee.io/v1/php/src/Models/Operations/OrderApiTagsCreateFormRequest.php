<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class OrderApiTagsCreateFormRequest
{
    /**
     * Tags to attach
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderTagCreate $rechnungsdruckWebAppControllersApiOrderTagCreate
     */
	#[SpeakeasyMetadata('request:mediaType=application/x-www-form-urlencoded')]
    public \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderTagCreate $rechnungsdruckWebAppControllersApiOrderTagCreate;
    
    /**
     * The internal id of the order
     * 
     * @var int $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public int $id;
    
	public function __construct()
	{
		$this->rechnungsdruckWebAppControllersApiOrderTagCreate = new \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderTagCreate();
		$this->id = 0;
	}
}
