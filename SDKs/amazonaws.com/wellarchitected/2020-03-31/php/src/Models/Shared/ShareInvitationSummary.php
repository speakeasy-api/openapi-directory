<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ShareInvitationSummary - A share invitation summary return object.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ShareInvitationSummary
{
	#[\JMS\Serializer\Annotation\SerializedName('LensArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $lensArn = null;
    
    /**
     * The full name of the lens.
     * 
     * @var ?string $lensName
     */
	#[\JMS\Serializer\Annotation\SerializedName('LensName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $lensName = null;
    
    /**
     * Permission granted on a workload share.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PermissionTypeEnum $permissionType
     */
	#[\JMS\Serializer\Annotation\SerializedName('PermissionType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\PermissionTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PermissionTypeEnum $permissionType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ShareInvitationId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $shareInvitationId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ShareResourceType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ShareResourceTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ShareResourceTypeEnum $shareResourceType = null;
    
    /**
     * An Amazon Web Services account ID.
     * 
     * @var ?string $sharedBy
     */
	#[\JMS\Serializer\Annotation\SerializedName('SharedBy')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sharedBy = null;
    
    /**
     * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.
     * 
     * @var ?string $sharedWith
     */
	#[\JMS\Serializer\Annotation\SerializedName('SharedWith')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sharedWith = null;
    
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     * 
     * @var ?string $workloadId
     */
	#[\JMS\Serializer\Annotation\SerializedName('WorkloadId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $workloadId = null;
    
    /**
     * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
     * 
     * @var ?string $workloadName
     */
	#[\JMS\Serializer\Annotation\SerializedName('WorkloadName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $workloadName = null;
    
	public function __construct()
	{
		$this->lensArn = null;
		$this->lensName = null;
		$this->permissionType = null;
		$this->shareInvitationId = null;
		$this->shareResourceType = null;
		$this->sharedBy = null;
		$this->sharedWith = null;
		$this->workloadId = null;
		$this->workloadName = null;
	}
}
