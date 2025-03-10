<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetSyncFlowUrlRequest
{
    /**
     * Accounting platform key
     * 
     * @var string $accountingKey
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=accountingKey')]
    public string $accountingKey;
    
    /**
     * Commerce platform key
     * 
     * @var string $commerceKey
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=commerceKey')]
    public string $commerceKey;
    
    /**
     * Identifier for your merchant, can be the merchant name or Codat company id.
     * 
     * @var ?string $merchantIdentifier
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=merchantIdentifier')]
    public ?string $merchantIdentifier = null;
    
	public function __construct()
	{
		$this->accountingKey = "";
		$this->commerceKey = "";
		$this->merchantIdentifier = null;
	}
}
