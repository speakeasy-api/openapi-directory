<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class TeamsAddOrUpdateRepoPermissionsInOrgRequestBody
{
    /**
     * The permission to grant the team on this repository. Can be one of:  
     * 
     * \* `pull` - team members can pull, but not push to or administer this repository.  
     * \* `push` - team members can pull and push, but not administer this repository.  
     * \* `admin` - team members can pull, push and administer this repository.  
     * \* `maintain` - team members can manage the repository without access to sensitive or destructive actions. Recommended for project managers. Only applies to repositories owned by organizations.  
     * \* `triage` - team members can proactively manage issues and pull requests without write access. Recommended for contributors who triage a repository. Only applies to repositories owned by organizations.  
     *   
     * If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum $permission
     */
	#[\JMS\Serializer\Annotation\SerializedName('permission')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum $permission = null;
    
	public function __construct()
	{
		$this->permission = null;
	}
}
