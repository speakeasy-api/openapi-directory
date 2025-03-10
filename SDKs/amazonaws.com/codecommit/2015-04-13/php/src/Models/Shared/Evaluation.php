<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Evaluation - Returns information about the approval rules applied to a pull request and whether conditions have been met.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Evaluation
{
    /**
     * $approvalRulesNotSatisfied
     * 
     * @var ?array<string> $approvalRulesNotSatisfied
     */
	#[\JMS\Serializer\Annotation\SerializedName('approvalRulesNotSatisfied')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $approvalRulesNotSatisfied = null;
    
    /**
     * $approvalRulesSatisfied
     * 
     * @var ?array<string> $approvalRulesSatisfied
     */
	#[\JMS\Serializer\Annotation\SerializedName('approvalRulesSatisfied')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $approvalRulesSatisfied = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('approved')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $approved = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('overridden')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $overridden = null;
    
	public function __construct()
	{
		$this->approvalRulesNotSatisfied = null;
		$this->approvalRulesSatisfied = null;
		$this->approved = null;
		$this->overridden = null;
	}
}
