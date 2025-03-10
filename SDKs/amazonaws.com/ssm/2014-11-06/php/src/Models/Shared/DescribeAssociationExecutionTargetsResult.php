<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeAssociationExecutionTargetsResult - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeAssociationExecutionTargetsResult
{
    /**
     * $associationExecutionTargets
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AssociationExecutionTarget> $associationExecutionTargets
     */
	#[\JMS\Serializer\Annotation\SerializedName('AssociationExecutionTargets')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AssociationExecutionTarget>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $associationExecutionTargets = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->associationExecutionTargets = null;
		$this->nextToken = null;
	}
}
