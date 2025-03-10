<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class AssociateAdminAccountRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('AdminAccount')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $adminAccount;
    
	public function __construct()
	{
		$this->adminAccount = "";
	}
}
