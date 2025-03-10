<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateArticleRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?\OpenAPI\OpenAPI\Models\Shared\Article $article = null;
    
    /**
     * The ID of the user to unpublish.
     * 
     * @var int $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public int $id;
    
	public function __construct()
	{
		$this->article = null;
		$this->id = 0;
	}
}
