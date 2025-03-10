<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * LoggingOptions - Information about logging options.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class LoggingOptions
{
	#[\JMS\Serializer\Annotation\SerializedName('enabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    public bool $enabled;
    
	#[\JMS\Serializer\Annotation\SerializedName('level')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\LoggingLevelEnum>')]
    public LoggingLevelEnum $level;
    
	#[\JMS\Serializer\Annotation\SerializedName('roleArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $roleArn;
    
	public function __construct()
	{
		$this->enabled = false;
		$this->level = \OpenAPI\OpenAPI\Models\Shared\LoggingLevelEnum::ERROR;
		$this->roleArn = "";
	}
}
