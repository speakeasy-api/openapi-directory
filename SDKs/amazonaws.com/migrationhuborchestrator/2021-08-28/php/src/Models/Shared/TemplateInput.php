<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * TemplateInput - The input parameters of a template.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class TemplateInput
{
	#[\JMS\Serializer\Annotation\SerializedName('dataType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DataTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DataTypeEnum $dataType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('inputName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $inputName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('required')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $required = null;
    
	public function __construct()
	{
		$this->dataType = null;
		$this->inputName = null;
		$this->required = null;
	}
}
