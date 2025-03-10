<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeComponentResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeComponentResponse
{
    /**
     * Describes a standalone resource or similarly grouped resources that the application is made up of.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ApplicationComponent $applicationComponent
     */
	#[\JMS\Serializer\Annotation\SerializedName('ApplicationComponent')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ApplicationComponent')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ApplicationComponent $applicationComponent = null;
    
    /**
     * $resourceList
     * 
     * @var ?array<string> $resourceList
     */
	#[\JMS\Serializer\Annotation\SerializedName('ResourceList')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $resourceList = null;
    
	public function __construct()
	{
		$this->applicationComponent = null;
		$this->resourceList = null;
	}
}
