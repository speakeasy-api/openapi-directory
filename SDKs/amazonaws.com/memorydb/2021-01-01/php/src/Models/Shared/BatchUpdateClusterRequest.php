<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class BatchUpdateClusterRequest
{
    /**
     * $clusterNames
     * 
     * @var array<string> $clusterNames
     */
	#[\JMS\Serializer\Annotation\SerializedName('ClusterNames')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $clusterNames;
    
	#[\JMS\Serializer\Annotation\SerializedName('ServiceUpdate')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ServiceUpdateRequest')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ServiceUpdateRequest $serviceUpdate = null;
    
	public function __construct()
	{
		$this->clusterNames = [];
		$this->serviceUpdate = null;
	}
}
