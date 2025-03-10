<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class TeamsAddUserResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\TeamsAddUser201ApplicationJSON $teamsAddUser201ApplicationJSONObject
     */
	
    public ?TeamsAddUser201ApplicationJSON $teamsAddUser201ApplicationJSONObject = null;
    
    /**
     * Error
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\TeamsAddUserDefaultApplicationJSON $teamsAddUserDefaultApplicationJSONObject
     */
	
    public ?TeamsAddUserDefaultApplicationJSON $teamsAddUserDefaultApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->teamsAddUser201ApplicationJSONObject = null;
		$this->teamsAddUserDefaultApplicationJSONObject = null;
	}
}
