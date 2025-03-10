<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class FireteamGetClanFireteamRequest
{
    /**
     * The unique id of the fireteam.
     * 
     * @var int $fireteamId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=fireteamId')]
    public int $fireteamId;
    
    /**
     * The group id of the clan.
     * 
     * @var int $groupId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=groupId')]
    public int $groupId;
    
	public function __construct()
	{
		$this->fireteamId = 0;
		$this->groupId = 0;
	}
}
