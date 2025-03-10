<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateGraphqlApiRequestBodyUserPoolConfig - Describes an Amazon Cognito user pool configuration.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateGraphqlApiRequestBodyUserPoolConfig
{
	#[\JMS\Serializer\Annotation\SerializedName('appIdClientRegex')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $appIdClientRegex = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('awsRegion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $awsRegion = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('defaultAction')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DefaultActionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\DefaultActionEnum $defaultAction = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('userPoolId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $userPoolId = null;
    
	public function __construct()
	{
		$this->appIdClientRegex = null;
		$this->awsRegion = null;
		$this->defaultAction = null;
		$this->userPoolId = null;
	}
}
