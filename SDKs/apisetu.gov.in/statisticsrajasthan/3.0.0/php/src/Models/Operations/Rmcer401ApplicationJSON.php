<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * Rmcer401ApplicationJSON - Unauthorized access
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class Rmcer401ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\Rmcer401ApplicationJSONErrorEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Rmcer401ApplicationJSONErrorEnum $error = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('errorDescription')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\Rmcer401ApplicationJSONErrorDescriptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Rmcer401ApplicationJSONErrorDescriptionEnum $errorDescription = null;
    
	public function __construct()
	{
		$this->error = null;
		$this->errorDescription = null;
	}
}
