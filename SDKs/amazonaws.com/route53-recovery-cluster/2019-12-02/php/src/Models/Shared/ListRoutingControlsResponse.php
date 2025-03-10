<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListRoutingControlsResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListRoutingControlsResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * $routingControls
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\RoutingControl> $routingControls
     */
	#[\JMS\Serializer\Annotation\SerializedName('RoutingControls')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\RoutingControl>')]
    public array $routingControls;
    
	public function __construct()
	{
		$this->nextToken = null;
		$this->routingControls = [];
	}
}
