<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ServiceUpdate - An update that you can apply to your MemoryDB clusters.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ServiceUpdate
{
	#[\JMS\Serializer\Annotation\SerializedName('AutoUpdateStartDate')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $autoUpdateStartDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ClusterName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $clusterName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NodesUpdated')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nodesUpdated = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ReleaseDate')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $releaseDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ServiceUpdateName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceUpdateName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ServiceUpdateStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ServiceUpdateStatusEnum $status = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ServiceUpdateTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ServiceUpdateTypeEnum $type = null;
    
	public function __construct()
	{
		$this->autoUpdateStartDate = null;
		$this->clusterName = null;
		$this->description = null;
		$this->nodesUpdated = null;
		$this->releaseDate = null;
		$this->serviceUpdateName = null;
		$this->status = null;
		$this->type = null;
	}
}
