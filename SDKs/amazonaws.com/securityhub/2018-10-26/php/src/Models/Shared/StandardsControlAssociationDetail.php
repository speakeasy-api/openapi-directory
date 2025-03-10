<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * StandardsControlAssociationDetail -  Provides details about a control's enablement status in a specified standard. 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class StandardsControlAssociationDetail
{
	#[\JMS\Serializer\Annotation\SerializedName('AssociationStatus')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\AssociationStatusEnum>')]
    public AssociationStatusEnum $associationStatus;
    
    /**
     * $relatedRequirements
     * 
     * @var ?array<string> $relatedRequirements
     */
	#[\JMS\Serializer\Annotation\SerializedName('RelatedRequirements')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $relatedRequirements = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SecurityControlArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $securityControlArn;
    
	#[\JMS\Serializer\Annotation\SerializedName('SecurityControlId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $securityControlId;
    
	#[\JMS\Serializer\Annotation\SerializedName('StandardsArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $standardsArn;
    
    /**
     * $standardsControlArns
     * 
     * @var ?array<string> $standardsControlArns
     */
	#[\JMS\Serializer\Annotation\SerializedName('StandardsControlArns')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $standardsControlArns = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('StandardsControlDescription')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $standardsControlDescription = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('StandardsControlTitle')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $standardsControlTitle = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('UpdatedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $updatedAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('UpdatedReason')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updatedReason = null;
    
	public function __construct()
	{
		$this->associationStatus = \OpenAPI\OpenAPI\Models\Shared\AssociationStatusEnum::ENABLED;
		$this->relatedRequirements = null;
		$this->securityControlArn = "";
		$this->securityControlId = "";
		$this->standardsArn = "";
		$this->standardsControlArns = null;
		$this->standardsControlDescription = null;
		$this->standardsControlTitle = null;
		$this->updatedAt = null;
		$this->updatedReason = null;
	}
}
