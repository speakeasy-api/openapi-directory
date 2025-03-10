<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DeleteTrafficMirrorFilterRequest
{
	
    public ?bool $dryRun = null;
    
	
    public string $trafficMirrorFilterId;
    
	public function __construct()
	{
		$this->dryRun = null;
		$this->trafficMirrorFilterId = "";
	}
}
