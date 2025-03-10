<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListComplianceItemsResult - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListComplianceItemsResult
{
    /**
     * $complianceItems
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ComplianceItem> $complianceItems
     */
	#[\JMS\Serializer\Annotation\SerializedName('ComplianceItems')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ComplianceItem>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $complianceItems = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->complianceItems = null;
		$this->nextToken = null;
	}
}
