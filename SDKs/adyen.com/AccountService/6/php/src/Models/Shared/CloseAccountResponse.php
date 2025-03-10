<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CloseAccountResponse - OK - the request has succeeded.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CloseAccountResponse
{
    /**
     * The account code of the account that is closed.
     * 
     * @var ?string $accountCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('accountCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountCode = null;
    
    /**
     * Contains field validation errors that would prevent requests from being processed.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ErrorFieldType> $invalidFields
     */
	#[\JMS\Serializer\Annotation\SerializedName('invalidFields')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ErrorFieldType>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $invalidFields = null;
    
    /**
     * The reference of a request. Can be used to uniquely identify the request.
     * 
     * @var ?string $pspReference
     */
	#[\JMS\Serializer\Annotation\SerializedName('pspReference')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $pspReference = null;
    
    /**
     * The result code.
     * 
     * @var ?string $resultCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('resultCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resultCode = null;
    
    /**
     * The new status of the account.
     * 
     * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CloseAccountResponseStatusEnum $status
     */
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CloseAccountResponseStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CloseAccountResponseStatusEnum $status = null;
    
	public function __construct()
	{
		$this->accountCode = null;
		$this->invalidFields = null;
		$this->pspReference = null;
		$this->resultCode = null;
		$this->status = null;
	}
}
