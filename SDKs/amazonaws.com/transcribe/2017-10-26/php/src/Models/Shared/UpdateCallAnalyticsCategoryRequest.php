<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class UpdateCallAnalyticsCategoryRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('CategoryName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $categoryName;
    
	#[\JMS\Serializer\Annotation\SerializedName('InputType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\InputTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InputTypeEnum $inputType = null;
    
    /**
     * $rules
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\Rule> $rules
     */
	#[\JMS\Serializer\Annotation\SerializedName('Rules')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Rule>')]
    public array $rules;
    
	public function __construct()
	{
		$this->categoryName = "";
		$this->inputType = null;
		$this->rules = [];
	}
}
