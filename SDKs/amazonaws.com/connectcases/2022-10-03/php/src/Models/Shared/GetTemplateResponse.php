<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetTemplateResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetTemplateResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('layoutConfiguration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LayoutConfiguration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LayoutConfiguration $layoutConfiguration = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
    /**
     * $requiredFields
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\RequiredField> $requiredFields
     */
	#[\JMS\Serializer\Annotation\SerializedName('requiredFields')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\RequiredField>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $requiredFields = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\TemplateStatusEnum>')]
    public TemplateStatusEnum $status;
    
    /**
     * $tags
     * 
     * @var ?array<string, string> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('tags')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('templateArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $templateArn;
    
	#[\JMS\Serializer\Annotation\SerializedName('templateId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $templateId;
    
	public function __construct()
	{
		$this->description = null;
		$this->layoutConfiguration = null;
		$this->name = "";
		$this->requiredFields = null;
		$this->status = \OpenAPI\OpenAPI\Models\Shared\TemplateStatusEnum::ACTIVE;
		$this->tags = null;
		$this->templateArn = "";
		$this->templateId = "";
	}
}
