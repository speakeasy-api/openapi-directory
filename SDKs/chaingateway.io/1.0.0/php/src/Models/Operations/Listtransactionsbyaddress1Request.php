<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class Listtransactionsbyaddress1Request
{
    /**
     * account address
     * 
     * @var string $address
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=address')]
    public string $address;
    
    /**
     * Current page, see description for more informatiosn how pagination works
     * 
     * @var string $page
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=page')]
    public string $page;
    
	public function __construct()
	{
		$this->address = "";
		$this->page = "";
	}
}
