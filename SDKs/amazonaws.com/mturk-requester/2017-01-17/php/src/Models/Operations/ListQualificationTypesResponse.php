<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListQualificationTypesResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListQualificationTypesResponse $listQualificationTypesResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListQualificationTypesResponse $listQualificationTypesResponse = null;
    
    /**
     * RequestError
     * 
     * @var mixed $requestError
     */
	
    public mixed $requestError = null;
    
    /**
     * ServiceFault
     * 
     * @var mixed $serviceFault
     */
	
    public mixed $serviceFault = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->listQualificationTypesResponse = null;
		$this->requestError = null;
		$this->serviceFault = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
