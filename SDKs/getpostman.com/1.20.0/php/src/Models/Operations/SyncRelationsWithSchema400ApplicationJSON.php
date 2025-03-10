<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * SyncRelationsWithSchema400ApplicationJSON - Failed to sync
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class SyncRelationsWithSchema400ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\SyncRelationsWithSchema400ApplicationJSONError')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SyncRelationsWithSchema400ApplicationJSONError $error = null;
    
	public function __construct()
	{
		$this->error = null;
	}
}
