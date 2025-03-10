<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AdminAccountSummary - Contains high level information about the Firewall Manager administrator account.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AdminAccountSummary
{
	#[\JMS\Serializer\Annotation\SerializedName('AdminAccount')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $adminAccount = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DefaultAdmin')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $defaultAdmin = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\OrganizationStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?OrganizationStatusEnum $status = null;
    
	public function __construct()
	{
		$this->adminAccount = null;
		$this->defaultAdmin = null;
		$this->status = null;
	}
}
