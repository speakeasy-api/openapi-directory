<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UpdateSnapshotResult - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UpdateSnapshotResult
{
	#[\JMS\Serializer\Annotation\SerializedName('Snapshot')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\SnapshotDetails')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SnapshotDetails $snapshot = null;
    
	public function __construct()
	{
		$this->snapshot = null;
	}
}
