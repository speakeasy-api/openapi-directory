<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PrivateArticleCategoriesReplaceRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\CategoriesCreator $categoriesCreator;
    
    /**
     * Article unique identifier
     * 
     * @var int $articleId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=article_id')]
    public int $articleId;
    
	public function __construct()
	{
		$this->categoriesCreator = new \OpenAPI\OpenAPI\Models\Shared\CategoriesCreator();
		$this->articleId = 0;
	}
}
