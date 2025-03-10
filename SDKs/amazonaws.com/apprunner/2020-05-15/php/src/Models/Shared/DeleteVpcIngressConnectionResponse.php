<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeleteVpcIngressConnectionResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeleteVpcIngressConnectionResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('VpcIngressConnection')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\VpcIngressConnection')]
    public VpcIngressConnection $vpcIngressConnection;
    
	public function __construct()
	{
		$this->vpcIngressConnection = new \OpenAPI\OpenAPI\Models\Shared\VpcIngressConnection();
	}
}
