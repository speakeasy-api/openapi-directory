<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BuildSuggestersResponse - The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BuildSuggestersResponse
{
    /**
     * A list of field names.
     * 
     * @var ?array<string> $fieldNames
     */
	
    public ?array $fieldNames = null;
    
	public function __construct()
	{
		$this->fieldNames = null;
	}
}
