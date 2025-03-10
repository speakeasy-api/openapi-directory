<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * DistributionGroupsDeleteForOrgDefaultApplicationJSON - Error
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class DistributionGroupsDeleteForOrgDefaultApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\DistributionGroupsDeleteForOrgDefaultApplicationJSONError')]
    public DistributionGroupsDeleteForOrgDefaultApplicationJSONError $error;
    
	public function __construct()
	{
		$this->error = new \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsDeleteForOrgDefaultApplicationJSONError();
	}
}
