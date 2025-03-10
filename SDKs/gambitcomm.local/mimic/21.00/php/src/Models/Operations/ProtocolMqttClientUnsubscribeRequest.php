<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ProtocolMqttClientUnsubscribeRequest
{
    /**
     * Agent to change MQTT state
     * 
     * @var int $agentNum
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=agentNum')]
    public int $agentNum;
    
    /**
     * Subscription Number
     * 
     * @var int $subNum
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=subNum')]
    public int $subNum;
    
	public function __construct()
	{
		$this->agentNum = 0;
		$this->subNum = 0;
	}
}
