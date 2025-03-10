<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ConsumersUpdateRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\UpdateConsumerRequest $updateConsumerRequest;
    
    /**
     * ID of the consumer to return
     * 
     * @var string $consumerId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=consumer_id')]
    public string $consumerId;
    
    /**
     * The ID of your Unify application
     * 
     * @var string $xApideckAppId
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=x-apideck-app-id')]
    public string $xApideckAppId;
    
	public function __construct()
	{
		$this->updateConsumerRequest = new \OpenAPI\OpenAPI\Models\Shared\UpdateConsumerRequest();
		$this->consumerId = "";
		$this->xApideckAppId = "";
	}
}
