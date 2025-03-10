<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PatchStylesPathRequestBody
{
    /**
     * Logo for custom branding.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\PatchStylesPathRequestBodyFile $file
     */
	#[SpeakeasyMetadata('multipartForm:file=true')]
    public PatchStylesPathRequestBodyFile $file;
    
	public function __construct()
	{
		$this->file = new \OpenAPI\OpenAPI\Models\Operations\PatchStylesPathRequestBodyFile();
	}
}
