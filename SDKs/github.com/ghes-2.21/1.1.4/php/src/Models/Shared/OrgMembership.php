<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * OrgMembership - Org Membership
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class OrgMembership
{
    /**
     * Organization Simple
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\OrganizationSimple $organization
     */
	#[\JMS\Serializer\Annotation\SerializedName('organization')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OrganizationSimple')]
    public OrganizationSimple $organization;
    
	#[\JMS\Serializer\Annotation\SerializedName('organization_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $organizationUrl;
    
	#[\JMS\Serializer\Annotation\SerializedName('permissions')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OrgMembershipPermissions')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?OrgMembershipPermissions $permissions = null;
    
    /**
     * The user's membership type in the organization.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\OrgMembershipRoleEnum $role
     */
	#[\JMS\Serializer\Annotation\SerializedName('role')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\OrgMembershipRoleEnum>')]
    public OrgMembershipRoleEnum $role;
    
    /**
     * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\OrgMembershipStateEnum $state
     */
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\OrgMembershipStateEnum>')]
    public OrgMembershipStateEnum $state;
    
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $url;
    
    /**
     * Simple User
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser $user
     */
	#[\JMS\Serializer\Annotation\SerializedName('user')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser')]
    public NullableSimpleUser $user;
    
	public function __construct()
	{
		$this->organization = new \OpenAPI\OpenAPI\Models\Shared\OrganizationSimple();
		$this->organizationUrl = "";
		$this->permissions = null;
		$this->role = \OpenAPI\OpenAPI\Models\Shared\OrgMembershipRoleEnum::ADMIN;
		$this->state = \OpenAPI\OpenAPI\Models\Shared\OrgMembershipStateEnum::ACTIVE;
		$this->url = "";
		$this->user = new \OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser();
	}
}
