<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class SendOTPMessageRequestBody
{
    /**
     * Send OTP message request parameters.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\SendOTPMessageRequestBodySendOTPMessageRequestParameters $sendOTPMessageRequestParameters
     */
	#[\JMS\Serializer\Annotation\SerializedName('SendOTPMessageRequestParameters')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\SendOTPMessageRequestBodySendOTPMessageRequestParameters')]
    public SendOTPMessageRequestBodySendOTPMessageRequestParameters $sendOTPMessageRequestParameters;
    
	public function __construct()
	{
		$this->sendOTPMessageRequestParameters = new \OpenAPI\OpenAPI\Models\Operations\SendOTPMessageRequestBodySendOTPMessageRequestParameters();
	}
}
