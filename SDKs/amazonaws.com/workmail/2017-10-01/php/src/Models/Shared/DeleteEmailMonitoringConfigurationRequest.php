<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DeleteEmailMonitoringConfigurationRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('OrganizationId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $organizationId;
    
	public function __construct()
	{
		$this->organizationId = "";
	}
}
