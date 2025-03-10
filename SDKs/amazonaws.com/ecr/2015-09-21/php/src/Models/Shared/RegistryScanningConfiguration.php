<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * RegistryScanningConfiguration - The scanning configuration for a private registry.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class RegistryScanningConfiguration
{
    /**
     * $rules
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\RegistryScanningRule> $rules
     */
	#[\JMS\Serializer\Annotation\SerializedName('rules')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\RegistryScanningRule>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $rules = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('scanType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ScanTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ScanTypeEnum $scanType = null;
    
	public function __construct()
	{
		$this->rules = null;
		$this->scanType = null;
	}
}
