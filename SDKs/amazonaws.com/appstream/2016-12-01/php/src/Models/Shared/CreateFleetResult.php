<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateFleetResult - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateFleetResult
{
	#[\JMS\Serializer\Annotation\SerializedName('Fleet')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Fleet')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Fleet $fleet = null;
    
	public function __construct()
	{
		$this->fleet = null;
	}
}
