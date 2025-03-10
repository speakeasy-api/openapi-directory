<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateCostCategoryDefinitionResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateCostCategoryDefinitionResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('CostCategoryArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $costCategoryArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EffectiveStart')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $effectiveStart = null;
    
	public function __construct()
	{
		$this->costCategoryArn = null;
		$this->effectiveStart = null;
	}
}
