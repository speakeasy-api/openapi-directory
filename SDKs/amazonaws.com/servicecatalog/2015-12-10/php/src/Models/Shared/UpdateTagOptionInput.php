<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class UpdateTagOptionInput
{
	#[\JMS\Serializer\Annotation\SerializedName('Active')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $active = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('Value')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $value = null;
    
	public function __construct()
	{
		$this->active = null;
		$this->id = "";
		$this->value = null;
	}
}
