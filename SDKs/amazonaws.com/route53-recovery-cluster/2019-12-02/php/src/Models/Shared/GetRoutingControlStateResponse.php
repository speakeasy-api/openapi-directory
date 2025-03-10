<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetRoutingControlStateResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetRoutingControlStateResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('RoutingControlArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $routingControlArn;
    
	#[\JMS\Serializer\Annotation\SerializedName('RoutingControlName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $routingControlName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RoutingControlState')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\RoutingControlStateEnum>')]
    public RoutingControlStateEnum $routingControlState;
    
	public function __construct()
	{
		$this->routingControlArn = "";
		$this->routingControlName = null;
		$this->routingControlState = \OpenAPI\OpenAPI\Models\Shared\RoutingControlStateEnum::ON;
	}
}
