<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Activity - Specifies the configuration and other settings for an activity in a journey.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Activity
{
	#[\JMS\Serializer\Annotation\SerializedName('CUSTOM')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CustomMessageActivity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CustomMessageActivity $custom = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ConditionalSplit')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConditionalSplitActivity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ConditionalSplitActivity $conditionalSplit = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ContactCenter')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ContactCenterActivity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ContactCenterActivity $contactCenter = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EMAIL')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\EmailMessageActivity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EmailMessageActivity $email = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Holdout')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\HoldoutActivity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?HoldoutActivity $holdout = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('MultiCondition')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\MultiConditionalSplitActivity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?MultiConditionalSplitActivity $multiCondition = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PUSH')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PushMessageActivity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PushMessageActivity $push = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RandomSplit')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\RandomSplitActivity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?RandomSplitActivity $randomSplit = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SMS')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\SMSMessageActivity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SMSMessageActivity $sms = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Wait')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\WaitActivity')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?WaitActivity $wait = null;
    
	public function __construct()
	{
		$this->custom = null;
		$this->conditionalSplit = null;
		$this->contactCenter = null;
		$this->description = null;
		$this->email = null;
		$this->holdout = null;
		$this->multiCondition = null;
		$this->push = null;
		$this->randomSplit = null;
		$this->sms = null;
		$this->wait = null;
	}
}
