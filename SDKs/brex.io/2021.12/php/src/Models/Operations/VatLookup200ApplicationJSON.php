<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * VatLookup200ApplicationJSON - Result of a VAT number reverse Lookup
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class VatLookup200ApplicationJSON
{
    /**
     * $matches
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\VatLookup200ApplicationJSONMatches> $matches
     */
	#[\JMS\Serializer\Annotation\SerializedName('matches')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\VatLookup200ApplicationJSONMatches>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $matches = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('searchterm_address')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $searchtermAddress = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('searchterm_country')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $searchtermCountry = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('searchterm_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $searchtermName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('timestamp')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $timestamp = null;
    
	public function __construct()
	{
		$this->matches = null;
		$this->searchtermAddress = null;
		$this->searchtermCountry = null;
		$this->searchtermName = null;
		$this->timestamp = null;
	}
}
