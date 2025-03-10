<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * FunctionRequest - The function request body.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class FunctionRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('implementedBy')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DataConnector')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DataConnector $implementedBy = null;
    
    /**
     * $requiredProperties
     * 
     * @var ?array<string> $requiredProperties
     */
	#[\JMS\Serializer\Annotation\SerializedName('requiredProperties')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $requiredProperties = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('scope')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ScopeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ScopeEnum $scope = null;
    
	public function __construct()
	{
		$this->implementedBy = null;
		$this->requiredProperties = null;
		$this->scope = null;
	}
}
