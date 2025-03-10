<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class GetRelationalDatabaseSnapshotRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('relationalDatabaseSnapshotName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $relationalDatabaseSnapshotName;
    
	public function __construct()
	{
		$this->relationalDatabaseSnapshotName = "";
	}
}
