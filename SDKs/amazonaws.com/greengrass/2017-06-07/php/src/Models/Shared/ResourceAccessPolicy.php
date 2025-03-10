<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ResourceAccessPolicy - A policy used by the function to access a resource.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ResourceAccessPolicy
{
	#[\JMS\Serializer\Annotation\SerializedName('Permission')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\PermissionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PermissionEnum $permission = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ResourceId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $resourceId;
    
	public function __construct()
	{
		$this->permission = null;
		$this->resourceId = "";
	}
}
