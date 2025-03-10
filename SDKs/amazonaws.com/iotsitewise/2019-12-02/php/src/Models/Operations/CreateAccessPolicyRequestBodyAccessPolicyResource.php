<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * CreateAccessPolicyRequestBodyAccessPolicyResource - Contains an IoT SiteWise Monitor resource ID for a portal or project.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class CreateAccessPolicyRequestBodyAccessPolicyResource
{
	#[\JMS\Serializer\Annotation\SerializedName('portal')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PortalResource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\PortalResource $portal = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('project')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ProjectResource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\ProjectResource $project = null;
    
	public function __construct()
	{
		$this->portal = null;
		$this->project = null;
	}
}
