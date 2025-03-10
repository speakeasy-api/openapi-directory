<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ChangePinRequest - The new account pin.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ChangePinRequest
{
    /**
     * The new pin to set.
     * 
     * @var string $pin
     */
	#[\JMS\Serializer\Annotation\SerializedName('pin')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $pin;
    
	public function __construct()
	{
		$this->pin = "";
	}
}
