<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UpdateRoomRequest - Request model for updating room's metadata
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UpdateRoomRequest
{
    /**
     * Name
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * User notes
     * 
     * 
     * Use empty string to remove.
     * 
     * @var ?string $notes
     */
	#[\JMS\Serializer\Annotation\SerializedName('notes')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $notes = null;
    
    /**
     * Quota in byte
     * 
     * @var ?int $quota
     */
	#[\JMS\Serializer\Annotation\SerializedName('quota')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $quota = null;
    
    /**
     * &#128640; Since v4.22.0
     * 
     * 
     * Time the node was created on external file system
     * 
     * @var ?\DateTime $timestampCreation
     */
	#[\JMS\Serializer\Annotation\SerializedName('timestampCreation')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $timestampCreation = null;
    
    /**
     * &#128640; Since v4.22.0
     * 
     * 
     * Time the content of a node was last modified on external file system
     * 
     * @var ?\DateTime $timestampModification
     */
	#[\JMS\Serializer\Annotation\SerializedName('timestampModification')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $timestampModification = null;
    
	public function __construct()
	{
		$this->name = null;
		$this->notes = null;
		$this->quota = null;
		$this->timestampCreation = null;
		$this->timestampModification = null;
	}
}
