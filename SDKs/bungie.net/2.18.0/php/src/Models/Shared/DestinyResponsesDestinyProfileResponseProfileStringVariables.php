<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DestinyResponsesDestinyProfileResponseProfileStringVariables - COMPONENT TYPE: StringVariables
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DestinyResponsesDestinyProfileResponseProfileStringVariables
{
	
    public ?DestinyComponentsStringVariablesDestinyStringVariablesComponent $data = null;
    
    /**
     * If true, this component is disabled.
     * 
     * @var ?bool $disabled
     */
	
    public ?bool $disabled = null;
    
	
    public ?int $privacy = null;
    
	public function __construct()
	{
		$this->data = null;
		$this->disabled = null;
		$this->privacy = null;
	}
}
