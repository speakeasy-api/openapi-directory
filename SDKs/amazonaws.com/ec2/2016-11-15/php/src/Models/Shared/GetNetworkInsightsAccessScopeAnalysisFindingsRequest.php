<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class GetNetworkInsightsAccessScopeAnalysisFindingsRequest
{
	
    public ?bool $dryRun = null;
    
	
    public ?int $maxResults = null;
    
	
    public string $networkInsightsAccessScopeAnalysisId;
    
	
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->dryRun = null;
		$this->maxResults = null;
		$this->networkInsightsAccessScopeAnalysisId = "";
		$this->nextToken = null;
	}
}
