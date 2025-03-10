<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetLatestArtifactRequest
{
    /**
     * The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
     * 
     * @var string $artifactId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=artifactId')]
    public string $artifactId;
    
    /**
     * Allows the user to specify if the content should be dereferenced when being returned
     * 
     * @var ?bool $dereference
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=dereference')]
    public ?bool $dereference = null;
    
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     * 
     * @var string $groupId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=groupId')]
    public string $groupId;
    
	public function __construct()
	{
		$this->artifactId = "";
		$this->dereference = null;
		$this->groupId = "";
	}
}
