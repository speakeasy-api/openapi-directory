<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DeleteStudioInput
{
	#[\JMS\Serializer\Annotation\SerializedName('StudioId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $studioId;
    
	public function __construct()
	{
		$this->studioId = "";
	}
}
