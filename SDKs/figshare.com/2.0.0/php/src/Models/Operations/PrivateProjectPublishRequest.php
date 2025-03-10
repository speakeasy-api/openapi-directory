<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PrivateProjectPublishRequest
{
    /**
     * Project unique identifier
     * 
     * @var int $projectId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=project_id')]
    public int $projectId;
    
	public function __construct()
	{
		$this->projectId = 0;
	}
}
