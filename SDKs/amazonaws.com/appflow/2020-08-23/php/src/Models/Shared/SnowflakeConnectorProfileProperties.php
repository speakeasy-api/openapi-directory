<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SnowflakeConnectorProfileProperties -  The connector-specific profile properties required when using Snowflake. 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SnowflakeConnectorProfileProperties
{
	#[\JMS\Serializer\Annotation\SerializedName('accountName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('bucketName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $bucketName;
    
	#[\JMS\Serializer\Annotation\SerializedName('bucketPrefix')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bucketPrefix = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('privateLinkServiceName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $privateLinkServiceName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('region')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $region = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('stage')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $stage;
    
	#[\JMS\Serializer\Annotation\SerializedName('warehouse')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $warehouse;
    
	public function __construct()
	{
		$this->accountName = null;
		$this->bucketName = "";
		$this->bucketPrefix = null;
		$this->privateLinkServiceName = null;
		$this->region = null;
		$this->stage = "";
		$this->warehouse = "";
	}
}
