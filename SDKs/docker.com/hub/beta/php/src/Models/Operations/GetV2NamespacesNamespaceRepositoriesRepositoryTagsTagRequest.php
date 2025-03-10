<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest
{
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=namespace')]
    public string $namespace;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repository')]
    public string $repository;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=tag')]
    public string $tag;
    
	public function __construct()
	{
		$this->namespace = "";
		$this->repository = "";
		$this->tag = "";
	}
}
