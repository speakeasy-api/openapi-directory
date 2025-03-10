<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class WebBackendConnectionRequestBody
{
	#[\JMS\Serializer\Annotation\SerializedName('connectionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $connectionId;
    
	#[\JMS\Serializer\Annotation\SerializedName('withRefreshedCatalog')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $withRefreshedCatalog = null;
    
	public function __construct()
	{
		$this->connectionId = "";
		$this->withRefreshedCatalog = null;
	}
}
