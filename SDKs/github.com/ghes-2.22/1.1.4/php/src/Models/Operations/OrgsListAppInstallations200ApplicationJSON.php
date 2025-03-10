<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * OrgsListAppInstallations200ApplicationJSON - Response
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class OrgsListAppInstallations200ApplicationJSON
{
    /**
     * $installations
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\InstallationGhes2> $installations
     */
	#[\JMS\Serializer\Annotation\SerializedName('installations')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\InstallationGhes2>')]
    public array $installations;
    
	#[\JMS\Serializer\Annotation\SerializedName('total_count')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $totalCount;
    
	public function __construct()
	{
		$this->installations = [];
		$this->totalCount = 0;
	}
}
