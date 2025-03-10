<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateReplicaAction - Represents a replica to be added.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateReplicaAction
{
	#[\JMS\Serializer\Annotation\SerializedName('RegionName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $regionName;
    
	public function __construct()
	{
		$this->regionName = "";
	}
}
