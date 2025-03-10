<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CancelJobOutput - Output structure for the CancelJob operation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CancelJobOutput
{
    /**
     * Specifies whether (true) or not (false) AWS Import/Export updated your job.
     * 
     * @var ?bool $success
     */
	
    public ?bool $success = null;
    
	public function __construct()
	{
		$this->success = null;
	}
}
