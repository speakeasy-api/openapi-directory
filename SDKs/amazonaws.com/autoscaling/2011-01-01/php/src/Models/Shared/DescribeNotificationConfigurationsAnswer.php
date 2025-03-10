<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeNotificationConfigurationsAnswer - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeNotificationConfigurationsAnswer
{
	
    public ?string $nextToken = null;
    
    /**
     * $notificationConfigurations
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\NotificationConfiguration> $notificationConfigurations
     */
	
    public array $notificationConfigurations;
    
	public function __construct()
	{
		$this->nextToken = null;
		$this->notificationConfigurations = [];
	}
}
