<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class GetResourceSetRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('Identifier')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $identifier;
    
	public function __construct()
	{
		$this->identifier = "";
	}
}
