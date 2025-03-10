<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateWorkspace200ApplicationJSON - Successful Response
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateWorkspace200ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('workspace')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\UpdateWorkspace200ApplicationJSONWorkspace')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UpdateWorkspace200ApplicationJSONWorkspace $workspace = null;
    
	public function __construct()
	{
		$this->workspace = null;
	}
}
