<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * MemberAccountStatus - Organization Config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class MemberAccountStatus
{
	#[\JMS\Serializer\Annotation\SerializedName('AccountId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $accountId;
    
	#[\JMS\Serializer\Annotation\SerializedName('ConfigRuleName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $configRuleName;
    
	#[\JMS\Serializer\Annotation\SerializedName('ErrorCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $errorCode = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ErrorMessage')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $errorMessage = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LastUpdateTime')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $lastUpdateTime = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('MemberAccountRuleStatus')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MemberAccountRuleStatusEnum>')]
    public MemberAccountRuleStatusEnum $memberAccountRuleStatus;
    
	public function __construct()
	{
		$this->accountId = "";
		$this->configRuleName = "";
		$this->errorCode = null;
		$this->errorMessage = null;
		$this->lastUpdateTime = null;
		$this->memberAccountRuleStatus = \OpenAPI\OpenAPI\Models\Shared\MemberAccountRuleStatusEnum::CREATE_SUCCESSFUL;
	}
}
