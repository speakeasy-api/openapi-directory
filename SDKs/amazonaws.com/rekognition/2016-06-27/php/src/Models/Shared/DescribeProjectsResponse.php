<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeProjectsResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeProjectsResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * $projectDescriptions
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ProjectDescription> $projectDescriptions
     */
	#[\JMS\Serializer\Annotation\SerializedName('ProjectDescriptions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ProjectDescription>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $projectDescriptions = null;
    
	public function __construct()
	{
		$this->nextToken = null;
		$this->projectDescriptions = null;
	}
}
