<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class EditCollectionRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?\OpenAPI\OpenAPI\Models\Shared\CollectionModification $collectionModification = null;
    
    /**
     * Unique identifier of the collection.
     * 
     * The following aliases are supported:
     * - `root`: The root collection of the account
     * - `sharedWithMe`: Automatically contains new resources that have been shared individually
     * - `trash`: Automatically contains resources that have been deleted
     * 
     * 
     * @var string $collection
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=collection')]
    public string $collection;
    
	public function __construct()
	{
		$this->collectionModification = null;
		$this->collection = "";
	}
}
