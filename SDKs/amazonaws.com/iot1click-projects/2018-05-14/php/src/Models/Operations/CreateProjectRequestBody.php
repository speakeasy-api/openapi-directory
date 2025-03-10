<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateProjectRequestBody
{
    /**
     * An optional description for the project.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * An object defining the template for a placement.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBodyPlacementTemplate $placementTemplate
     */
	#[\JMS\Serializer\Annotation\SerializedName('placementTemplate')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBodyPlacementTemplate')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CreateProjectRequestBodyPlacementTemplate $placementTemplate = null;
    
    /**
     * The name of the project to create.
     * 
     * @var string $projectName
     */
	#[\JMS\Serializer\Annotation\SerializedName('projectName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $projectName;
    
    /**
     * Optional tags (metadata key/value pairs) to be associated with the project. For example, <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
     * 
     * @var ?array<string, string> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('tags')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->placementTemplate = null;
		$this->projectName = "";
		$this->tags = null;
	}
}
