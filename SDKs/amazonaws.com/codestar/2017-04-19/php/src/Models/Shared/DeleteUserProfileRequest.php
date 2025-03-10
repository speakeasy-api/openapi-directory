<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DeleteUserProfileRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('userArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $userArn;
    
	public function __construct()
	{
		$this->userArn = "";
	}
}
