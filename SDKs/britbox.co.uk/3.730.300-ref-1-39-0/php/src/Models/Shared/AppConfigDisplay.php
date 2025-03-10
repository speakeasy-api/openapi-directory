<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class AppConfigDisplay
{
    /**
     * An array of globally configured themes.
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\Theme> $themes
     */
	#[\JMS\Serializer\Annotation\SerializedName('themes')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Theme>')]
    public array $themes;
    
	public function __construct()
	{
		$this->themes = [];
	}
}
