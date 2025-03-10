<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateComponentOutput - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateComponentOutput
{
	#[\JMS\Serializer\Annotation\SerializedName('component')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Component')]
    public Component $component;
    
	public function __construct()
	{
		$this->component = new \OpenAPI\OpenAPI\Models\Shared\Component();
	}
}
