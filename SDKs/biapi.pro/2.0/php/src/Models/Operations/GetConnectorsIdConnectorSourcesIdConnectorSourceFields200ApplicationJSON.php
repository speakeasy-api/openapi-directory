<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetConnectorsIdConnectorSourcesIdConnectorSourceFields200ApplicationJSON - source_fields
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetConnectorsIdConnectorSourcesIdConnectorSourceFields200ApplicationJSON
{
    /**
     * $sourceFields
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\ConnectorSourceField> $sourceFields
     */
	#[\JMS\Serializer\Annotation\SerializedName('source_fields')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ConnectorSourceField>')]
    public array $sourceFields;
    
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
		$this->sourceFields = [];
		$this->total = null;
	}
}
