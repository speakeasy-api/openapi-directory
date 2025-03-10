<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ModifyLaunchTemplateRequest
{
	
    public ?string $clientToken = null;
    
	
    public ?string $defaultVersion = null;
    
	
    public ?bool $dryRun = null;
    
	
    public ?string $launchTemplateId = null;
    
	
    public ?string $launchTemplateName = null;
    
	public function __construct()
	{
		$this->clientToken = null;
		$this->defaultVersion = null;
		$this->dryRun = null;
		$this->launchTemplateId = null;
		$this->launchTemplateName = null;
	}
}
