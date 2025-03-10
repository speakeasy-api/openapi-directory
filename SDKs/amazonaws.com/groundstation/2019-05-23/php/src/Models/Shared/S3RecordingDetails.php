<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * S3RecordingDetails - Details about an S3 recording <code>Config</code> used in a contact.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class S3RecordingDetails
{
	#[\JMS\Serializer\Annotation\SerializedName('bucketArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bucketArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('keyTemplate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $keyTemplate = null;
    
	public function __construct()
	{
		$this->bucketArn = null;
		$this->keyTemplate = null;
	}
}
