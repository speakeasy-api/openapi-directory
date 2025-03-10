<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class GetKeyPairsRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('includeDefaultKeyPair')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $includeDefaultKeyPair = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('pageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $pageToken = null;
    
	public function __construct()
	{
		$this->includeDefaultKeyPair = null;
		$this->pageToken = null;
	}
}
