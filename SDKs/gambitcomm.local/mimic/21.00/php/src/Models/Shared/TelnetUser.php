<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class TelnetUser
{
    /**
     * $groups
     * 
     * @var ?array<string> $groups
     */
	#[\JMS\Serializer\Annotation\SerializedName('groups')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $groups = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('hasPassword')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $hasPassword = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('password')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $password = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('username')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $username = null;
    
	public function __construct()
	{
		$this->groups = null;
		$this->hasPassword = null;
		$this->password = null;
		$this->username = null;
	}
}
