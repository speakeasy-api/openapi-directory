<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletions - Describes a Reserved Instance whose queued purchase was not deleted.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletions
{
	
    public ?DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletionsError $error = null;
    
	
    public ?string $reservedInstancesId = null;
    
	public function __construct()
	{
		$this->error = null;
		$this->reservedInstancesId = null;
	}
}
