<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateInvitationsRequestBody
{
    /**
     * An array that lists Amazon Web Services account IDs, one for each account to send the invitation to.
     * 
     * @var array<string> $accountIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('accountIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $accountIds;
    
    /**
     * Specifies whether to send the invitation as an email message. If this value is false, Amazon Macie sends the invitation (as an email message) to the email address that you specified for the recipient's account when you associated the account with your account. The default value is false.
     * 
     * @var ?bool $disableEmailNotification
     */
	#[\JMS\Serializer\Annotation\SerializedName('disableEmailNotification')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $disableEmailNotification = null;
    
    /**
     * Custom text to include in the email message that contains the invitation. The text can contain as many as 80 alphanumeric characters.
     * 
     * @var ?string $message
     */
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $message = null;
    
	public function __construct()
	{
		$this->accountIds = [];
		$this->disableEmailNotification = null;
		$this->message = null;
	}
}
