<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SpaceDetails - The space's details.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SpaceDetails
{
	#[\JMS\Serializer\Annotation\SerializedName('CreationTime')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $creationTime = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DomainId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $domainId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LastModifiedTime')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $lastModifiedTime = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SpaceName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $spaceName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\SpaceStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SpaceStatusEnum $status = null;
    
	public function __construct()
	{
		$this->creationTime = null;
		$this->domainId = null;
		$this->lastModifiedTime = null;
		$this->spaceName = null;
		$this->status = null;
	}
}
