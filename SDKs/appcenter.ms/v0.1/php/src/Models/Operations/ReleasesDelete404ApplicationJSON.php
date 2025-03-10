<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ReleasesDelete404ApplicationJSON - An app or a release couldn't be found
 * 
 * 
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ReleasesDelete404ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('code')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ReleasesDelete404ApplicationJSONCodeEnum>')]
    public ReleasesDelete404ApplicationJSONCodeEnum $code;
    
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $message;
    
	public function __construct()
	{
		$this->code = \OpenAPI\OpenAPI\Models\Operations\ReleasesDelete404ApplicationJSONCodeEnum::BAD_REQUEST;
		$this->message = "";
	}
}
