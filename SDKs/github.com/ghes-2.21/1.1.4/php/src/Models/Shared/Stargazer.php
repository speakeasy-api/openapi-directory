<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Stargazer - Stargazer
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Stargazer
{
	#[\JMS\Serializer\Annotation\SerializedName('starred_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $starredAt;
    
    /**
     * Simple User
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser $user
     */
	#[\JMS\Serializer\Annotation\SerializedName('user')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser')]
    public NullableSimpleUser $user;
    
	public function __construct()
	{
		$this->starredAt = new \DateTime();
		$this->user = new \OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser();
	}
}
