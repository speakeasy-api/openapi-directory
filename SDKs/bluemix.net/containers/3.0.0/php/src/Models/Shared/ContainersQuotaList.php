<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ContainersQuotaList - The space quota details that you want to update.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ContainersQuotaList
{
    /**
     * The new number of public IP addresses that you want to assign to your space.
     * 
     * @var ?int $floatingIps
     */
	#[\JMS\Serializer\Annotation\SerializedName('floating_ips')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $floatingIps = null;
    
    /**
     * The amount of container memory that you want to assign to your space.
     * 
     * @var ?int $ram
     */
	#[\JMS\Serializer\Annotation\SerializedName('ram')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $ram = null;
    
	public function __construct()
	{
		$this->floatingIps = null;
		$this->ram = null;
	}
}
