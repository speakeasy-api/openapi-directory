<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PermissionSetProvisioningStatus - A structure that is used to provide the status of the provisioning operation for a specified permission set.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PermissionSetProvisioningStatus
{
	#[\JMS\Serializer\Annotation\SerializedName('AccountId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CreatedDate')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $createdDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('FailureReason')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $failureReason = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PermissionSetArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $permissionSetArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RequestId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $requestId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\StatusValuesEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?StatusValuesEnum $status = null;
    
	public function __construct()
	{
		$this->accountId = null;
		$this->createdDate = null;
		$this->failureReason = null;
		$this->permissionSetArn = null;
		$this->requestId = null;
		$this->status = null;
	}
}
