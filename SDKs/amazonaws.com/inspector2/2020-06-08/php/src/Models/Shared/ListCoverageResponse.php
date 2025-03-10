<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListCoverageResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListCoverageResponse
{
    /**
     * $coveredResources
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CoveredResource> $coveredResources
     */
	#[\JMS\Serializer\Annotation\SerializedName('coveredResources')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CoveredResource>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $coveredResources = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('nextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->coveredResources = null;
		$this->nextToken = null;
	}
}
