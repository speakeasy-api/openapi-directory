<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetOrganizationConfigRuleDetailedStatusResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetOrganizationConfigRuleDetailedStatusResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * $organizationConfigRuleDetailedStatus
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\MemberAccountStatus> $organizationConfigRuleDetailedStatus
     */
	#[\JMS\Serializer\Annotation\SerializedName('OrganizationConfigRuleDetailedStatus')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\MemberAccountStatus>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $organizationConfigRuleDetailedStatus = null;
    
	public function __construct()
	{
		$this->nextToken = null;
		$this->organizationConfigRuleDetailedStatus = null;
	}
}
