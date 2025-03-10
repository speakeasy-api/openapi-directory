<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ScalingPolicy - Describes a scaling policy.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ScalingPolicy
{
	
    public ?string $adjustmentType = null;
    
    /**
     * $alarms
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Alarm> $alarms
     */
	
    public ?array $alarms = null;
    
	
    public ?string $autoScalingGroupName = null;
    
	
    public ?int $cooldown = null;
    
	
    public ?bool $enabled = null;
    
	
    public ?int $estimatedInstanceWarmup = null;
    
	
    public ?string $metricAggregationType = null;
    
	
    public ?int $minAdjustmentMagnitude = null;
    
	
    public ?int $minAdjustmentStep = null;
    
	
    public ?string $policyARN = null;
    
	
    public ?string $policyName = null;
    
	
    public ?string $policyType = null;
    
	
    public ?PredictiveScalingConfiguration $predictiveScalingConfiguration = null;
    
	
    public ?int $scalingAdjustment = null;
    
    /**
     * $stepAdjustments
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\StepAdjustment> $stepAdjustments
     */
	
    public ?array $stepAdjustments = null;
    
	
    public ?TargetTrackingConfiguration $targetTrackingConfiguration = null;
    
	public function __construct()
	{
		$this->adjustmentType = null;
		$this->alarms = null;
		$this->autoScalingGroupName = null;
		$this->cooldown = null;
		$this->enabled = null;
		$this->estimatedInstanceWarmup = null;
		$this->metricAggregationType = null;
		$this->minAdjustmentMagnitude = null;
		$this->minAdjustmentStep = null;
		$this->policyARN = null;
		$this->policyName = null;
		$this->policyType = null;
		$this->predictiveScalingConfiguration = null;
		$this->scalingAdjustment = null;
		$this->stepAdjustments = null;
		$this->targetTrackingConfiguration = null;
	}
}
