<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeleteEnvironmentOutput - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeleteEnvironmentOutput
{
	#[\JMS\Serializer\Annotation\SerializedName('environment')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Environment')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Environment $environment = null;
    
	public function __construct()
	{
		$this->environment = null;
	}
}
