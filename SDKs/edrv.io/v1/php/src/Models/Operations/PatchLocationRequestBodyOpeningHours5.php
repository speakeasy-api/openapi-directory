<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PatchLocationRequestBodyOpeningHours5
{
	#[\JMS\Serializer\Annotation\SerializedName('endTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $endTime = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('startTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $startTime = null;
    
	public function __construct()
	{
		$this->endTime = null;
		$this->startTime = null;
	}
}
