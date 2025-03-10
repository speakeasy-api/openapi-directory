<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CompanyUser - OK - the request has succeeded.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CompanyUser
{
	#[\JMS\Serializer\Annotation\SerializedName('_links')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Links')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Links $links = null;
    
    /**
     * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user.
     * 
     * @var ?array<string> $accountGroups
     */
	#[\JMS\Serializer\Annotation\SerializedName('accountGroups')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $accountGroups = null;
    
    /**
     * Indicates whether this user is active.
     * 
     * @var ?bool $active
     */
	#[\JMS\Serializer\Annotation\SerializedName('active')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $active = null;
    
    /**
     * The list of [merchant accounts](https://docs.adyen.com/account/account-structure#merchant-accounts) associated with this user.
     * 
     * @var ?array<string> $associatedMerchantAccounts
     */
	#[\JMS\Serializer\Annotation\SerializedName('associatedMerchantAccounts')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $associatedMerchantAccounts = null;
    
    /**
     * Set of authn apps available to this user
     * 
     * @var ?array<string> $authnApps
     */
	#[\JMS\Serializer\Annotation\SerializedName('authnApps')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $authnApps = null;
    
    /**
     * The email address of the user.
     * 
     * @var string $email
     */
	#[\JMS\Serializer\Annotation\SerializedName('email')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $email;
    
    /**
     * The unique identifier of the user.
     * 
     * @var string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Name')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Name $name = null;
    
    /**
     * The list of [roles](https://docs.adyen.com/account/user-roles) for this user.
     * 
     * @var array<string> $roles
     */
	#[\JMS\Serializer\Annotation\SerializedName('roles')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $roles;
    
    /**
     * The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**.
     * 
     * @var string $timeZoneCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('timeZoneCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $timeZoneCode;
    
    /**
     * The username for this user.
     * 
     * @var string $username
     */
	#[\JMS\Serializer\Annotation\SerializedName('username')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $username;
    
	public function __construct()
	{
		$this->links = null;
		$this->accountGroups = null;
		$this->active = null;
		$this->associatedMerchantAccounts = null;
		$this->authnApps = null;
		$this->email = "";
		$this->id = "";
		$this->name = null;
		$this->roles = [];
		$this->timeZoneCode = "";
		$this->username = "";
	}
}
