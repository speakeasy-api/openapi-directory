<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetPolicyVersionResponse - The output from the GetPolicyVersion operation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetPolicyVersionResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('creationDate')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $creationDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('generationId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $generationId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('isDefaultVersion')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isDefaultVersion = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('lastModifiedDate')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $lastModifiedDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('policyArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $policyArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('policyDocument')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $policyDocument = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('policyName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $policyName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('policyVersionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $policyVersionId = null;
    
	public function __construct()
	{
		$this->creationDate = null;
		$this->generationId = null;
		$this->isDefaultVersion = null;
		$this->lastModifiedDate = null;
		$this->policyArn = null;
		$this->policyDocument = null;
		$this->policyName = null;
		$this->policyVersionId = null;
	}
}
