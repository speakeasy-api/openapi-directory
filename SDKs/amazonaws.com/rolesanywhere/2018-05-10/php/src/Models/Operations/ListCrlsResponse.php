<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListCrlsResponse
{
    /**
     * AccessDeniedException
     * 
     * @var mixed $accessDeniedException
     */
	
    public mixed $accessDeniedException = null;
    
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListCrlsResponse $listCrlsResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListCrlsResponse $listCrlsResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ValidationException
     * 
     * @var mixed $validationException
     */
	
    public mixed $validationException = null;
    
	public function __construct()
	{
		$this->accessDeniedException = null;
		$this->contentType = "";
		$this->listCrlsResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->validationException = null;
	}
}
