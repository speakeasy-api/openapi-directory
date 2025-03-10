<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Logger - Information about a logger
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Logger
{
	#[\JMS\Serializer\Annotation\SerializedName('Component')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\LoggerComponentEnum>')]
    public LoggerComponentEnum $component;
    
	#[\JMS\Serializer\Annotation\SerializedName('Id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('Level')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\LoggerLevelEnum>')]
    public LoggerLevelEnum $level;
    
	#[\JMS\Serializer\Annotation\SerializedName('Space')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $space = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\LoggerTypeEnum>')]
    public LoggerTypeEnum $type;
    
	public function __construct()
	{
		$this->component = \OpenAPI\OpenAPI\Models\Shared\LoggerComponentEnum::GREENGRASS_SYSTEM;
		$this->id = "";
		$this->level = \OpenAPI\OpenAPI\Models\Shared\LoggerLevelEnum::DEBUG;
		$this->space = null;
		$this->type = \OpenAPI\OpenAPI\Models\Shared\LoggerTypeEnum::FILE_SYSTEM;
	}
}
