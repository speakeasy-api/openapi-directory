<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class TagResourceRequestBody
{
    /**
     * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
     * 
     * @var array<string, string> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('tags')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    public array $tags;
    
	public function __construct()
	{
		$this->tags = [];
	}
}
