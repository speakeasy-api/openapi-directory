<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * Fmcer502ApplicationJSON - Bad gateway
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class Fmcer502ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\Fmcer502ApplicationJSONErrorEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Fmcer502ApplicationJSONErrorEnum $error = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('errorDescription')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\Fmcer502ApplicationJSONErrorDescriptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Fmcer502ApplicationJSONErrorDescriptionEnum $errorDescription = null;
    
	public function __construct()
	{
		$this->error = null;
		$this->errorDescription = null;
	}
}
