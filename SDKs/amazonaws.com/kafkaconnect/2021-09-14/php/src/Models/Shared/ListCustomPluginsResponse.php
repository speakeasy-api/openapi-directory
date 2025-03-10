<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListCustomPluginsResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListCustomPluginsResponse
{
    /**
     * $customPlugins
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CustomPluginSummary> $customPlugins
     */
	#[\JMS\Serializer\Annotation\SerializedName('customPlugins')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CustomPluginSummary>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $customPlugins = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('nextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->customPlugins = null;
		$this->nextToken = null;
	}
}
