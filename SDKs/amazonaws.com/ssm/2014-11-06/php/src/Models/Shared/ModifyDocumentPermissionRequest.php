<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ModifyDocumentPermissionRequest
{
    /**
     * $accountIdsToAdd
     * 
     * @var ?array<string> $accountIdsToAdd
     */
	#[\JMS\Serializer\Annotation\SerializedName('AccountIdsToAdd')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $accountIdsToAdd = null;
    
    /**
     * $accountIdsToRemove
     * 
     * @var ?array<string> $accountIdsToRemove
     */
	#[\JMS\Serializer\Annotation\SerializedName('AccountIdsToRemove')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $accountIdsToRemove = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('PermissionType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DocumentPermissionTypeEnum>')]
    public DocumentPermissionTypeEnum $permissionType;
    
	#[\JMS\Serializer\Annotation\SerializedName('SharedDocumentVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sharedDocumentVersion = null;
    
	public function __construct()
	{
		$this->accountIdsToAdd = null;
		$this->accountIdsToRemove = null;
		$this->name = "";
		$this->permissionType = \OpenAPI\OpenAPI\Models\Shared\DocumentPermissionTypeEnum::SHARE;
		$this->sharedDocumentVersion = null;
	}
}
