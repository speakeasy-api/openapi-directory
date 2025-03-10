<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class InvitationsSent200ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('app')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\InvitationsSent200ApplicationJSONApp')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InvitationsSent200ApplicationJSONApp $app = null;
    
    /**
     * The id of the invitation
     * 
     * @var string $invitationId
     */
	#[\JMS\Serializer\Annotation\SerializedName('invitation_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $invitationId;
    
	#[\JMS\Serializer\Annotation\SerializedName('organization')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\InvitationsSent200ApplicationJSONOrganization')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InvitationsSent200ApplicationJSONOrganization $organization = null;
    
	public function __construct()
	{
		$this->app = null;
		$this->invitationId = "";
		$this->organization = null;
	}
}
