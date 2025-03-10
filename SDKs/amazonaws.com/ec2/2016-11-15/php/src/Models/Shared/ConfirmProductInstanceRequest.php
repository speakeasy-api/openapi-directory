<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ConfirmProductInstanceRequest
{
	
    public ?bool $dryRun = null;
    
	
    public string $instanceId;
    
	
    public string $productCode;
    
	public function __construct()
	{
		$this->dryRun = null;
		$this->instanceId = "";
		$this->productCode = "";
	}
}
