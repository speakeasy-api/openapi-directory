<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateLaunchTemplateVersionResultWarning - If the new version of the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateLaunchTemplateVersionResultWarning
{
    /**
     * $errors
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CreateLaunchTemplateVersionResultWarningErrors> $errors
     */
	
    public ?array $errors = null;
    
	public function __construct()
	{
		$this->errors = null;
	}
}
