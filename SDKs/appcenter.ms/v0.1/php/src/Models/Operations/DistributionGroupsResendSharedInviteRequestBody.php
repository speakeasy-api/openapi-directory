<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * DistributionGroupsResendSharedInviteRequestBody - The list of members to add
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class DistributionGroupsResendSharedInviteRequestBody
{
    /**
     * The list of emails of the users
     * 
     * @var ?array<string> $userEmails
     */
	#[\JMS\Serializer\Annotation\SerializedName('user_emails')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $userEmails = null;
    
	public function __construct()
	{
		$this->userEmails = null;
	}
}
