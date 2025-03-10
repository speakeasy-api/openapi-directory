<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class EobsCreateResponse
{
	
    public string $contentType;
    
    /**
     * Created
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EOBObject $eobObject
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\EOBObject $eobObject = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->eobObject = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
