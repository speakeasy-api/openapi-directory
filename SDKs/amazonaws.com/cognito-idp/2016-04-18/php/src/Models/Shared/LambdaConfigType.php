<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * LambdaConfigType - Specifies the configuration for Lambda triggers.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class LambdaConfigType
{
	#[\JMS\Serializer\Annotation\SerializedName('CreateAuthChallenge')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createAuthChallenge = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CustomEmailSender')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CustomEmailLambdaVersionConfigType')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CustomEmailLambdaVersionConfigType $customEmailSender = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CustomMessage')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $customMessage = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CustomSMSSender')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CustomSMSLambdaVersionConfigType')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CustomSMSLambdaVersionConfigType $customSMSSender = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DefineAuthChallenge')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $defineAuthChallenge = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('KMSKeyID')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kmsKeyID = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PostAuthentication')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $postAuthentication = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PostConfirmation')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $postConfirmation = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PreAuthentication')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $preAuthentication = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PreSignUp')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $preSignUp = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PreTokenGeneration')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $preTokenGeneration = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('UserMigration')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $userMigration = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VerifyAuthChallengeResponse')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $verifyAuthChallengeResponse = null;
    
	public function __construct()
	{
		$this->createAuthChallenge = null;
		$this->customEmailSender = null;
		$this->customMessage = null;
		$this->customSMSSender = null;
		$this->defineAuthChallenge = null;
		$this->kmsKeyID = null;
		$this->postAuthentication = null;
		$this->postConfirmation = null;
		$this->preAuthentication = null;
		$this->preSignUp = null;
		$this->preTokenGeneration = null;
		$this->userMigration = null;
		$this->verifyAuthChallengeResponse = null;
	}
}
