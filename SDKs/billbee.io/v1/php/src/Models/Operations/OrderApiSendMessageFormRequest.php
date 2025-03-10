<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class OrderApiSendMessageFormRequest
{
    /**
     * The message model
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel $rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel
     */
	#[SpeakeasyMetadata('request:mediaType=application/x-www-form-urlencoded')]
    public \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel $rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel;
    
    /**
     * The id of the order
     * 
     * @var int $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public int $id;
    
	public function __construct()
	{
		$this->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel = new \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel();
		$this->id = 0;
	}
}
