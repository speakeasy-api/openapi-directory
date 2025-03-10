<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeregisterClusterResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeregisterClusterResponse
{
    /**
     * An object representing an Amazon EKS cluster.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Cluster $cluster
     */
	#[\JMS\Serializer\Annotation\SerializedName('cluster')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Cluster')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Cluster $cluster = null;
    
	public function __construct()
	{
		$this->cluster = null;
	}
}
