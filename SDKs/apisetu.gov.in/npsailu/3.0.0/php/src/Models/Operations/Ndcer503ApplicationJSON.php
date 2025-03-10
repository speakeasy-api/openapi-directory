<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * Ndcer503ApplicationJSON - Service unavailable
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class Ndcer503ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\Ndcer503ApplicationJSONErrorEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Ndcer503ApplicationJSONErrorEnum $error = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('errorDescription')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\Ndcer503ApplicationJSONErrorDescriptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Ndcer503ApplicationJSONErrorDescriptionEnum $errorDescription = null;
    
	public function __construct()
	{
		$this->error = null;
		$this->errorDescription = null;
	}
}
