<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetBanksIdConnectorLogos200ApplicationJSON - connectorlogos
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetBanksIdConnectorLogos200ApplicationJSON
{
    /**
     * $connectorlogos
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\ConnectorLogo> $connectorlogos
     */
	#[\JMS\Serializer\Annotation\SerializedName('connectorlogos')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ConnectorLogo>')]
    public array $connectorlogos;
    
    /**
     * total number of results
     * 
     * @var ?float $total
     */
	#[\JMS\Serializer\Annotation\SerializedName('total')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $total = null;
    
	public function __construct()
	{
		$this->connectorlogos = [];
		$this->total = null;
	}
}
