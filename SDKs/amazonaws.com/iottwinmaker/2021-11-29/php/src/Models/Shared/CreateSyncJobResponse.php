<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateSyncJobResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateSyncJobResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('arn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $arn;
    
	#[\JMS\Serializer\Annotation\SerializedName('creationDateTime')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $creationDateTime;
    
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\SyncJobStateEnum>')]
    public SyncJobStateEnum $state;
    
	public function __construct()
	{
		$this->arn = "";
		$this->creationDateTime = new \DateTime();
		$this->state = \OpenAPI\OpenAPI\Models\Shared\SyncJobStateEnum::CREATING;
	}
}
