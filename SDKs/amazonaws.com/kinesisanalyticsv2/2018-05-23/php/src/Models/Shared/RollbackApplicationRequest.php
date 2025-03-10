<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class RollbackApplicationRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('ApplicationName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $applicationName;
    
	#[\JMS\Serializer\Annotation\SerializedName('CurrentApplicationVersionId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $currentApplicationVersionId;
    
	public function __construct()
	{
		$this->applicationName = "";
		$this->currentApplicationVersionId = 0;
	}
}
