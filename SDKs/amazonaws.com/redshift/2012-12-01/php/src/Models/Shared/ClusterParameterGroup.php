<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ClusterParameterGroup - Describes a parameter group.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ClusterParameterGroup
{
	
    public ?string $description = null;
    
	
    public ?string $parameterGroupFamily = null;
    
	
    public ?string $parameterGroupName = null;
    
    /**
     * $tags
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\TagList> $tags
     */
	
    public ?array $tags = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->parameterGroupFamily = null;
		$this->parameterGroupName = null;
		$this->tags = null;
	}
}
