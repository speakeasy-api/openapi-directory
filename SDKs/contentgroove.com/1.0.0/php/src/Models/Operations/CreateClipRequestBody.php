<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateClipRequestBody
{
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\CreateClipRequestBodyData')]
    public CreateClipRequestBodyData $data;
    
	public function __construct()
	{
		$this->data = new \OpenAPI\OpenAPI\Models\Operations\CreateClipRequestBodyData();
	}
}
