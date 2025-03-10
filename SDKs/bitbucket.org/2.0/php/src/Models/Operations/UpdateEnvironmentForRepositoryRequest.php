<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateEnvironmentForRepositoryRequest
{
    /**
     * The environment UUID.
     * 
     * @var string $environmentUuid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=environment_uuid')]
    public string $environmentUuid;
    
    /**
     * The repository.
     * 
     * @var string $repoSlug
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo_slug')]
    public string $repoSlug;
    
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     * 
     * @var string $workspace
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=workspace')]
    public string $workspace;
    
	public function __construct()
	{
		$this->environmentUuid = "";
		$this->repoSlug = "";
		$this->workspace = "";
	}
}
