<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SsmParameterStoreParameter - AWS Systems Manager Parameter Store parameter.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SsmParameterStoreParameter
{
	#[\JMS\Serializer\Annotation\SerializedName('parameterName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $parameterName;
    
	#[\JMS\Serializer\Annotation\SerializedName('parameterType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameterTypeEnum>')]
    public SsmParameterStoreParameterTypeEnum $parameterType;
    
	public function __construct()
	{
		$this->parameterName = "";
		$this->parameterType = \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameterTypeEnum::STRING;
	}
}
