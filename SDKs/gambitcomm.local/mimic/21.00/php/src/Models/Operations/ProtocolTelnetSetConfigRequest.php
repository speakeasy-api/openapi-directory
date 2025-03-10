<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ProtocolTelnetSetConfigRequest
{
    /**
     * Agent to set the TELNET configuration
     * 
     * @var int $agentNum
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=agentNum')]
    public int $agentNum;
    
    /**
     * Parameter to set the TELNET configuration
     * 
     * @var string $argument
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=argument')]
    public string $argument;
    
    /**
     * Value to set the TELNET configuration
     * 
     * @var string $value
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=value')]
    public string $value;
    
	public function __construct()
	{
		$this->agentNum = 0;
		$this->argument = "";
		$this->value = "";
	}
}
