<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ExportConfigurationsDisableResponse
{
	
    public string $contentType;
    
    /**
     * Error code with reason
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsDisableDefaultApplicationJSON $exportConfigurationsDisableDefaultApplicationJSONObject
     */
	
    public ?ExportConfigurationsDisableDefaultApplicationJSON $exportConfigurationsDisableDefaultApplicationJSONObject = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->exportConfigurationsDisableDefaultApplicationJSONObject = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
