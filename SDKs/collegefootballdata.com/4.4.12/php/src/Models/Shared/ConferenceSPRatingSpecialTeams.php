<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ConferenceSPRatingSpecialTeams
{
	#[\JMS\Serializer\Annotation\SerializedName('rating')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $rating = null;
    
	public function __construct()
	{
		$this->rating = null;
	}
}
