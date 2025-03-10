<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ComputeFarmConfiguration - The configuration for a render farm that is associated with a studio resource.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ComputeFarmConfiguration
{
	#[\JMS\Serializer\Annotation\SerializedName('activeDirectoryUser')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $activeDirectoryUser = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('endpoint')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $endpoint = null;
    
	public function __construct()
	{
		$this->activeDirectoryUser = null;
		$this->endpoint = null;
	}
}
