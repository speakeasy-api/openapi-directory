<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ApplicationVersionDescriptionsMessage - Result message wrapping a list of application version descriptions.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ApplicationVersionDescriptionsMessage
{
    /**
     * $applicationVersions
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ApplicationVersionDescription> $applicationVersions
     */
	
    public ?array $applicationVersions = null;
    
	
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->applicationVersions = null;
		$this->nextToken = null;
	}
}
