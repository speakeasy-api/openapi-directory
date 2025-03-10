<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ImportationConfigureCatalogColumnRequest
{
    /**
     * The custom column identifier
     * 
     * @var string $columnId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=columnId')]
    public string $columnId;
    
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\ConfigureCatalogColumnCatalogRequest $configureCatalogColumnCatalogRequest;
    
    /**
     * The execution identifier of you catalog importation
     * 
     * @var string $executionId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=executionId')]
    public string $executionId;
    
    /**
     * Your store identifier
     * 
     * @var string $storeId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=storeId')]
    public string $storeId;
    
	public function __construct()
	{
		$this->columnId = "";
		$this->configureCatalogColumnCatalogRequest = new \OpenAPI\OpenAPI\Models\Shared\ConfigureCatalogColumnCatalogRequest();
		$this->executionId = "";
		$this->storeId = "";
	}
}
