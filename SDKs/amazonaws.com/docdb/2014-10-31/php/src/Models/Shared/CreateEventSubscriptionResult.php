<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateEventSubscriptionResult - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateEventSubscriptionResult
{
    /**
     * Detailed information about an event to which you have subscribed.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EventSubscription $eventSubscription
     */
	
    public ?EventSubscription $eventSubscription = null;
    
	public function __construct()
	{
		$this->eventSubscription = null;
	}
}
