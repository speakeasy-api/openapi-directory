<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ServiceNetworkServiceAssociationSummary - Summary information about the association between a service network and a service.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ServiceNetworkServiceAssociationSummary
{
	#[\JMS\Serializer\Annotation\SerializedName('arn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $arn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('createdAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $createdAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('createdBy')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createdBy = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('customDomainName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $customDomainName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('dnsEntry')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DnsEntry')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DnsEntry $dnsEntry = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('serviceArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('serviceId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('serviceName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('serviceNetworkArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceNetworkArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('serviceNetworkId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceNetworkId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('serviceNetworkName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceNetworkName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ServiceNetworkServiceAssociationStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ServiceNetworkServiceAssociationStatusEnum $status = null;
    
	public function __construct()
	{
		$this->arn = null;
		$this->createdAt = null;
		$this->createdBy = null;
		$this->customDomainName = null;
		$this->dnsEntry = null;
		$this->id = null;
		$this->serviceArn = null;
		$this->serviceId = null;
		$this->serviceName = null;
		$this->serviceNetworkArn = null;
		$this->serviceNetworkId = null;
		$this->serviceNetworkName = null;
		$this->status = null;
	}
}
