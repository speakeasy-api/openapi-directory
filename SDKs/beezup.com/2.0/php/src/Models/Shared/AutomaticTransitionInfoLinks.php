<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class AutomaticTransitionInfoLinks
{
	#[\JMS\Serializer\Annotation\SerializedName('configure')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LinksConfigureAutomaticTransitionsLink')]
    public LinksConfigureAutomaticTransitionsLink $configure;
    
	public function __construct()
	{
		$this->configure = new \OpenAPI\OpenAPI\Models\Shared\LinksConfigureAutomaticTransitionsLink();
	}
}
