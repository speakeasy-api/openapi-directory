<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPaths - Describes a path.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPaths
{
	
    public ?GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsDestination $destination = null;
    
	
    public ?GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsSource $source = null;
    
    /**
     * $throughResources
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsThroughResources> $throughResources
     */
	
    public ?array $throughResources = null;
    
	public function __construct()
	{
		$this->destination = null;
		$this->source = null;
		$this->throughResources = null;
	}
}
