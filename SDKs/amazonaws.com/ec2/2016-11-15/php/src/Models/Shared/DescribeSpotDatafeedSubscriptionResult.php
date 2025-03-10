<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeSpotDatafeedSubscriptionResult - Contains the output of DescribeSpotDatafeedSubscription.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeSpotDatafeedSubscriptionResult
{
	
    public ?DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription $spotDatafeedSubscription = null;
    
	public function __construct()
	{
		$this->spotDatafeedSubscription = null;
	}
}
