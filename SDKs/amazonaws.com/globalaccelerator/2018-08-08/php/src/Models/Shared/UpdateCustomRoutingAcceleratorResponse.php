<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UpdateCustomRoutingAcceleratorResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UpdateCustomRoutingAcceleratorResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('Accelerator')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CustomRoutingAccelerator')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CustomRoutingAccelerator $accelerator = null;
    
	public function __construct()
	{
		$this->accelerator = null;
	}
}
