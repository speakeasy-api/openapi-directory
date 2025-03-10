<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InstanceRefreshLivePoolProgress - Reports progress on replacing instances that are in the Auto Scaling group.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InstanceRefreshLivePoolProgress
{
	
    public ?int $instancesToUpdate = null;
    
	
    public ?int $percentageComplete = null;
    
	public function __construct()
	{
		$this->instancesToUpdate = null;
		$this->percentageComplete = null;
	}
}
