<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetClusterCredentialsMessage - The request parameters to get cluster credentials.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetClusterCredentialsMessage
{
	
    public ?bool $autoCreate = null;
    
	
    public string $clusterIdentifier;
    
    /**
     * $dbGroups
     * 
     * @var ?array<string> $dbGroups
     */
	
    public ?array $dbGroups = null;
    
	
    public ?string $dbName = null;
    
	
    public string $dbUser;
    
	
    public ?int $durationSeconds = null;
    
	public function __construct()
	{
		$this->autoCreate = null;
		$this->clusterIdentifier = "";
		$this->dbGroups = null;
		$this->dbName = null;
		$this->dbUser = "";
		$this->durationSeconds = null;
	}
}
