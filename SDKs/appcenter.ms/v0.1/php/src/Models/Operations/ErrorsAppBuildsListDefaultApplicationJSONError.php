<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ErrorsAppBuildsListDefaultApplicationJSONError
{
	#[\JMS\Serializer\Annotation\SerializedName('code')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ErrorsAppBuildsListDefaultApplicationJSONErrorCodeEnum>')]
    public ErrorsAppBuildsListDefaultApplicationJSONErrorCodeEnum $code;
    
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $message;
    
	public function __construct()
	{
		$this->code = \OpenAPI\OpenAPI\Models\Operations\ErrorsAppBuildsListDefaultApplicationJSONErrorCodeEnum::BAD_REQUEST;
		$this->message = "";
	}
}
