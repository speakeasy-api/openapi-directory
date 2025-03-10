<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Margin
{
	#[\JMS\Serializer\Annotation\SerializedName('bottom')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $bottom = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('left')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $left = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('right')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $right = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('top')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $top = null;
    
	public function __construct()
	{
		$this->bottom = null;
		$this->left = null;
		$this->right = null;
		$this->top = null;
	}
}
