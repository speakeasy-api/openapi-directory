<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * LaunchGroup - A structure that defines one launch group in a launch. A launch group is a variation of the feature that you are including in the launch.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class LaunchGroup
{
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * $featureVariations
     * 
     * @var array<string, string> $featureVariations
     */
	#[\JMS\Serializer\Annotation\SerializedName('featureVariations')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    public array $featureVariations;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	public function __construct()
	{
		$this->description = null;
		$this->featureVariations = [];
		$this->name = "";
	}
}
