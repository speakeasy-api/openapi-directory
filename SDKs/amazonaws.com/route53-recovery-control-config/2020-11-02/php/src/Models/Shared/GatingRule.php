<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GatingRule - <p>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.</p> <p>For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</p>
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GatingRule
{
	#[\JMS\Serializer\Annotation\SerializedName('ControlPanelArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $controlPanelArn;
    
    /**
     * $gatingControls
     * 
     * @var array<string> $gatingControls
     */
	#[\JMS\Serializer\Annotation\SerializedName('GatingControls')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $gatingControls;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('RuleConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\RuleConfig')]
    public RuleConfig $ruleConfig;
    
	#[\JMS\Serializer\Annotation\SerializedName('SafetyRuleArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $safetyRuleArn;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\StatusEnum>')]
    public StatusEnum $status;
    
    /**
     * $targetControls
     * 
     * @var array<string> $targetControls
     */
	#[\JMS\Serializer\Annotation\SerializedName('TargetControls')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $targetControls;
    
	#[\JMS\Serializer\Annotation\SerializedName('WaitPeriodMs')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $waitPeriodMs;
    
	public function __construct()
	{
		$this->controlPanelArn = "";
		$this->gatingControls = [];
		$this->name = "";
		$this->ruleConfig = new \OpenAPI\OpenAPI\Models\Shared\RuleConfig();
		$this->safetyRuleArn = "";
		$this->status = \OpenAPI\OpenAPI\Models\Shared\StatusEnum::PENDING;
		$this->targetControls = [];
		$this->waitPeriodMs = 0;
	}
}
