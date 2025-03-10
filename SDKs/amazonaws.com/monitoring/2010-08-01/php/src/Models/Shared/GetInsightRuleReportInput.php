<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class GetInsightRuleReportInput
{
	
    public \DateTime $endTime;
    
	
    public ?int $maxContributorCount = null;
    
    /**
     * $metrics
     * 
     * @var ?array<string> $metrics
     */
	
    public ?array $metrics = null;
    
	
    public ?string $orderBy = null;
    
	
    public int $period;
    
	
    public string $ruleName;
    
	
    public \DateTime $startTime;
    
	public function __construct()
	{
		$this->endTime = new \DateTime();
		$this->maxContributorCount = null;
		$this->metrics = null;
		$this->orderBy = null;
		$this->period = 0;
		$this->ruleName = "";
		$this->startTime = new \DateTime();
	}
}
