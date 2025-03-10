<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ListApplicationsRequestBodyFilters - Applications list filters.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ListApplicationsRequestBodyFilters
{
    /**
     * $applicationIDs
     * 
     * @var ?array<string> $applicationIDs
     */
	#[\JMS\Serializer\Annotation\SerializedName('applicationIDs')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $applicationIDs = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('isArchived')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isArchived = null;
    
    /**
     * $waveIDs
     * 
     * @var ?array<string> $waveIDs
     */
	#[\JMS\Serializer\Annotation\SerializedName('waveIDs')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $waveIDs = null;
    
	public function __construct()
	{
		$this->applicationIDs = null;
		$this->isArchived = null;
		$this->waveIDs = null;
	}
}
