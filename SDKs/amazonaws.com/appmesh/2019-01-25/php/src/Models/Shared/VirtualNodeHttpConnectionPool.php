<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * VirtualNodeHttpConnectionPool - An object that represents a type of connection pool.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class VirtualNodeHttpConnectionPool
{
	#[\JMS\Serializer\Annotation\SerializedName('maxConnections')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $maxConnections;
    
	#[\JMS\Serializer\Annotation\SerializedName('maxPendingRequests')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $maxPendingRequests = null;
    
	public function __construct()
	{
		$this->maxConnections = 0;
		$this->maxPendingRequests = null;
	}
}
