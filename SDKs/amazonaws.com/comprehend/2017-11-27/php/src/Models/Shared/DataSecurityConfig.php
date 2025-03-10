<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DataSecurityConfig - Data security configuration.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DataSecurityConfig
{
	#[\JMS\Serializer\Annotation\SerializedName('DataLakeKmsKeyId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dataLakeKmsKeyId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ModelKmsKeyId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $modelKmsKeyId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VolumeKmsKeyId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $volumeKmsKeyId = null;
    
    /**
     *  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. 
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\VpcConfig $vpcConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('VpcConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\VpcConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?VpcConfig $vpcConfig = null;
    
	public function __construct()
	{
		$this->dataLakeKmsKeyId = null;
		$this->modelKmsKeyId = null;
		$this->volumeKmsKeyId = null;
		$this->vpcConfig = null;
	}
}
