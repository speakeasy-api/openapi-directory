<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PushValidationInfo
{
    /**
     * $information
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\PushFieldValidation> $information
     */
	#[\JMS\Serializer\Annotation\SerializedName('information')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\PushFieldValidation>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $information = null;
    
    /**
     * $warnings
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\PushFieldValidation> $warnings
     */
	#[\JMS\Serializer\Annotation\SerializedName('warnings')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\PushFieldValidation>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $warnings = null;
    
	public function __construct()
	{
		$this->information = null;
		$this->warnings = null;
	}
}
