<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * TriggerConfig -  The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class TriggerConfig
{
	#[\JMS\Serializer\Annotation\SerializedName('triggerProperties')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TriggerProperties')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TriggerProperties $triggerProperties = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('triggerType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum>')]
    public TriggerTypeEnum $triggerType;
    
	public function __construct()
	{
		$this->triggerProperties = null;
		$this->triggerType = \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum::SCHEDULED;
	}
}
