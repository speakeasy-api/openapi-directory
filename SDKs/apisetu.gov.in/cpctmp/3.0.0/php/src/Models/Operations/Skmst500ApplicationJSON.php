<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * Skmst500ApplicationJSON - Internal server error
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class Skmst500ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\Skmst500ApplicationJSONErrorEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Skmst500ApplicationJSONErrorEnum $error = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('errorDescription')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\Skmst500ApplicationJSONErrorDescriptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Skmst500ApplicationJSONErrorDescriptionEnum $errorDescription = null;
    
	public function __construct()
	{
		$this->error = null;
		$this->errorDescription = null;
	}
}
