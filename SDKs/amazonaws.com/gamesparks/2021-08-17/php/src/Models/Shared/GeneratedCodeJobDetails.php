<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GeneratedCodeJobDetails - Details about a generated code job.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GeneratedCodeJobDetails
{
	#[\JMS\Serializer\Annotation\SerializedName('Description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ExpirationTime')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $expirationTime = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('GeneratedCodeJobId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $generatedCodeJobId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('S3Url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $s3Url = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GeneratedCodeJobStateEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GeneratedCodeJobStateEnum $status = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->expirationTime = null;
		$this->generatedCodeJobId = null;
		$this->s3Url = null;
		$this->status = null;
	}
}
