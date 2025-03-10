<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * NotifyConfigurationType - The notify configuration type.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class NotifyConfigurationType
{
	#[\JMS\Serializer\Annotation\SerializedName('BlockEmail')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\NotifyEmailType')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?NotifyEmailType $blockEmail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('From')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $from = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('MfaEmail')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\NotifyEmailType')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?NotifyEmailType $mfaEmail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NoActionEmail')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\NotifyEmailType')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?NotifyEmailType $noActionEmail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ReplyTo')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $replyTo = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SourceArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $sourceArn;
    
	public function __construct()
	{
		$this->blockEmail = null;
		$this->from = null;
		$this->mfaEmail = null;
		$this->noActionEmail = null;
		$this->replyTo = null;
		$this->sourceArn = "";
	}
}
