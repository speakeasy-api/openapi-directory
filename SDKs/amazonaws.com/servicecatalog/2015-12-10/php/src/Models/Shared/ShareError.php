<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ShareError - Errors that occurred during the portfolio share operation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ShareError
{
    /**
     * $accounts
     * 
     * @var ?array<string> $accounts
     */
	#[\JMS\Serializer\Annotation\SerializedName('Accounts')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $accounts = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Error')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $error = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $message = null;
    
	public function __construct()
	{
		$this->accounts = null;
		$this->error = null;
		$this->message = null;
	}
}
