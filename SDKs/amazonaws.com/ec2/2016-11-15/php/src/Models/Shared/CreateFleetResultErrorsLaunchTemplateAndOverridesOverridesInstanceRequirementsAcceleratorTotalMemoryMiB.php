<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateFleetResultErrorsLaunchTemplateAndOverridesOverridesInstanceRequirementsAcceleratorTotalMemoryMiB - <p>The minimum and maximum amount of total accelerator memory, in MiB.</p> <p>Default: No minimum or maximum limits</p>
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateFleetResultErrorsLaunchTemplateAndOverridesOverridesInstanceRequirementsAcceleratorTotalMemoryMiB
{
	
    public ?int $max = null;
    
	
    public ?int $min = null;
    
	public function __construct()
	{
		$this->max = null;
		$this->min = null;
	}
}
