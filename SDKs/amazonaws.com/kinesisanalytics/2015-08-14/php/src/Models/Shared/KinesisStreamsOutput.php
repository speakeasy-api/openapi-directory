<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * KinesisStreamsOutput - When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class KinesisStreamsOutput
{
	#[\JMS\Serializer\Annotation\SerializedName('ResourceARN')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $resourceARN;
    
	#[\JMS\Serializer\Annotation\SerializedName('RoleARN')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $roleARN;
    
	public function __construct()
	{
		$this->resourceARN = "";
		$this->roleARN = "";
	}
}
