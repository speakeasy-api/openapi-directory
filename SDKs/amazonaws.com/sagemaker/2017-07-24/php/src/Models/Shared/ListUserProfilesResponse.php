<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListUserProfilesResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListUserProfilesResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * $userProfiles
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\UserProfileDetails> $userProfiles
     */
	#[\JMS\Serializer\Annotation\SerializedName('UserProfiles')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\UserProfileDetails>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $userProfiles = null;
    
	public function __construct()
	{
		$this->nextToken = null;
		$this->userProfiles = null;
	}
}
