<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * NumberPurchaseRequest - Request object is used to order a local or toll-free numbers
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class NumberPurchaseRequest
{
    /**
     * City of requested numbers
     * 
     * @var ?string $city
     */
	#[\JMS\Serializer\Annotation\SerializedName('city')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $city = null;
    
    /**
     * Total count of local numbers requested
     * 
     * @var ?int $localCount
     */
	#[\JMS\Serializer\Annotation\SerializedName('localCount')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $localCount = null;
    
    /**
     * A list of phone numbers in E.164 format (11-digit) to buy. Example: 12132000384
     * 
     * @var ?array<string> $numbers
     */
	#[\JMS\Serializer\Annotation\SerializedName('numbers')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $numbers = null;
    
    /**
     * Country prefix of requested numbers
     * 
     * @var ?string $prefix
     */
	#[\JMS\Serializer\Annotation\SerializedName('prefix')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $prefix = null;
    
    /**
     * ~
     * 
     * @var ?string $promo
     */
	#[\JMS\Serializer\Annotation\SerializedName('promo')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $promo = null;
    
    /**
     * A two-letter state code of requested numbers
     * 
     * @var ?string $state
     */
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $state = null;
    
    /**
     * Total count of toll-free numbers requested
     * 
     * @var ?int $tollFreeCount
     */
	#[\JMS\Serializer\Annotation\SerializedName('tollFreeCount')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $tollFreeCount = null;
    
    /**
     * A five-digit Zip code of requested numbers
     * 
     * @var ?string $zipcode
     */
	#[\JMS\Serializer\Annotation\SerializedName('zipcode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $zipcode = null;
    
	public function __construct()
	{
		$this->city = null;
		$this->localCount = null;
		$this->numbers = null;
		$this->prefix = null;
		$this->promo = null;
		$this->state = null;
		$this->tollFreeCount = null;
		$this->zipcode = null;
	}
}
