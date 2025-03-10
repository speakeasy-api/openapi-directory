<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * StartPolicyGenerationRequestBodyPolicyGenerationDetails - Contains the ARN details about the IAM entity for which the policy is generated.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class StartPolicyGenerationRequestBodyPolicyGenerationDetails
{
	#[\JMS\Serializer\Annotation\SerializedName('principalArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $principalArn = null;
    
	public function __construct()
	{
		$this->principalArn = null;
	}
}
