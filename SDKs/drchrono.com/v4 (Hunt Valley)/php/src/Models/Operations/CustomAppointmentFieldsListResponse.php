<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CustomAppointmentFieldsListResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * OK
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CustomAppointmentFieldsList200ApplicationJSON $customAppointmentFieldsList200ApplicationJSONObject
     */
	
    public ?CustomAppointmentFieldsList200ApplicationJSON $customAppointmentFieldsList200ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->customAppointmentFieldsList200ApplicationJSONObject = null;
	}
}
