<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CreateAccountHolderRequest
{
    /**
     * Your unique identifier for the prospective account holder.
     * 
     * The length must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are allowed.
     * 
     * @var string $accountHolderCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('accountHolderCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $accountHolderCode;
    
	#[\JMS\Serializer\Annotation\SerializedName('accountHolderDetails')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AccountHolderDetails')]
    public AccountHolderDetails $accountHolderDetails;
    
    /**
     * If set to **true**, an account with the default options is automatically created for the account holder.
     * 
     * By default, this field is set to **true**.
     * 
     * @var ?bool $createDefaultAccount
     */
	#[\JMS\Serializer\Annotation\SerializedName('createDefaultAccount')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $createDefaultAccount = null;
    
    /**
     * The legal entity type of the account holder. This determines the information that should be provided in the request.
     * 
     * 
     * Possible values: **Business**, **Individual**, or **NonProfit**.
     * 
     * * If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.
     * 
     * * If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\CreateAccountHolderRequestLegalEntityEnum $legalEntity
     */
	#[\JMS\Serializer\Annotation\SerializedName('legalEntity')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CreateAccountHolderRequestLegalEntityEnum>')]
    public CreateAccountHolderRequestLegalEntityEnum $legalEntity;
    
    /**
     * The starting [processing tier](https://docs.adyen.com/marketplaces-and-platforms/classic/onboarding-and-verification/precheck-kyc-information) for the prospective account holder.
     * 
     * @var ?int $processingTier
     */
	#[\JMS\Serializer\Annotation\SerializedName('processingTier')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $processingTier = null;
    
	public function __construct()
	{
		$this->accountHolderCode = "";
		$this->accountHolderDetails = new \OpenAPI\OpenAPI\Models\Shared\AccountHolderDetails();
		$this->createDefaultAccount = null;
		$this->legalEntity = \OpenAPI\OpenAPI\Models\Shared\CreateAccountHolderRequestLegalEntityEnum::BUSINESS;
		$this->processingTier = null;
	}
}
