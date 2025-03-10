<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ServerErrorResponse - Internal server error.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ServerErrorResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ServerError')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ServerError $error = null;
    
	public function __construct()
	{
		$this->error = null;
	}
}
