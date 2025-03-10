<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DescribeMailboxExportJobRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('JobId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $jobId;
    
	#[\JMS\Serializer\Annotation\SerializedName('OrganizationId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $organizationId;
    
	public function __construct()
	{
		$this->jobId = "";
		$this->organizationId = "";
	}
}
