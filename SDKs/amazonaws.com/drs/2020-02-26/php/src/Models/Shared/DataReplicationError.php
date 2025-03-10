<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DataReplicationError - Error in data replication.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DataReplicationError
{
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DataReplicationErrorStringEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DataReplicationErrorStringEnum $error = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('rawError')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $rawError = null;
    
	public function __construct()
	{
		$this->error = null;
		$this->rawError = null;
	}
}
