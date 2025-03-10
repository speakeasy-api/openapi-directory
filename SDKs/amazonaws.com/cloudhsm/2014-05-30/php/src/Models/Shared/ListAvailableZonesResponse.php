<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListAvailableZonesResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListAvailableZonesResponse
{
    /**
     * $azList
     * 
     * @var ?array<string> $azList
     */
	#[\JMS\Serializer\Annotation\SerializedName('AZList')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $azList = null;
    
	public function __construct()
	{
		$this->azList = null;
	}
}
