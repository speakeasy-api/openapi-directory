<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class UpdateBucketBundleRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('bucketName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $bucketName;
    
	#[\JMS\Serializer\Annotation\SerializedName('bundleId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $bundleId;
    
	public function __construct()
	{
		$this->bucketName = "";
		$this->bundleId = "";
	}
}
