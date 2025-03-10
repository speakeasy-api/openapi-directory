<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListExplainabilityExportsResponse
{
	
    public string $contentType;
    
    /**
     * InvalidInputException
     * 
     * @var mixed $invalidInputException
     */
	
    public mixed $invalidInputException = null;
    
    /**
     * InvalidNextTokenException
     * 
     * @var mixed $invalidNextTokenException
     */
	
    public mixed $invalidNextTokenException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListExplainabilityExportsResponse $listExplainabilityExportsResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListExplainabilityExportsResponse $listExplainabilityExportsResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->invalidInputException = null;
		$this->invalidNextTokenException = null;
		$this->listExplainabilityExportsResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
