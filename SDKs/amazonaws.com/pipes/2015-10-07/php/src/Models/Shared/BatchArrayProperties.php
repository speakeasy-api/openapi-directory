<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BatchArrayProperties - The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BatchArrayProperties
{
	#[\JMS\Serializer\Annotation\SerializedName('Size')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $size = null;
    
	public function __construct()
	{
		$this->size = null;
	}
}
