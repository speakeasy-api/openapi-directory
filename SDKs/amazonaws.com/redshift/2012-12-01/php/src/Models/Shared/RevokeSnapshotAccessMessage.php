<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * RevokeSnapshotAccessMessage - <p/>
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class RevokeSnapshotAccessMessage
{
	
    public string $accountWithRestoreAccess;
    
	
    public ?string $snapshotArn = null;
    
	
    public ?string $snapshotClusterIdentifier = null;
    
	
    public ?string $snapshotIdentifier = null;
    
	public function __construct()
	{
		$this->accountWithRestoreAccess = "";
		$this->snapshotArn = null;
		$this->snapshotClusterIdentifier = null;
		$this->snapshotIdentifier = null;
	}
}
