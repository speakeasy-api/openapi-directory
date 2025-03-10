<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DescribePatchGroupStateResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DescribePatchGroupStateResult $describePatchGroupStateResult
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\DescribePatchGroupStateResult $describePatchGroupStateResult = null;
    
    /**
     * InternalServerError
     * 
     * @var mixed $internalServerError
     */
	
    public mixed $internalServerError = null;
    
    /**
     * InvalidNextToken
     * 
     * @var mixed $invalidNextToken
     */
	
    public mixed $invalidNextToken = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->describePatchGroupStateResult = null;
		$this->internalServerError = null;
		$this->invalidNextToken = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
