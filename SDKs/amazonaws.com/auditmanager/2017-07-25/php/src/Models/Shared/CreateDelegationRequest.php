<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateDelegationRequest -  A collection of attributes that's used to create a delegation for an assessment in Audit Manager. 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateDelegationRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('comment')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $comment = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('controlSetId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $controlSetId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('roleArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $roleArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('roleType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\RoleTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?RoleTypeEnum $roleType = null;
    
	public function __construct()
	{
		$this->comment = null;
		$this->controlSetId = null;
		$this->roleArn = null;
		$this->roleType = null;
	}
}
