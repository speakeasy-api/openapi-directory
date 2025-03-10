<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PutRegistryCatalogDataResponse
{
	
    public string $contentType;
    
    /**
     * InvalidParameterException
     * 
     * @var mixed $invalidParameterException
     */
	
    public mixed $invalidParameterException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PutRegistryCatalogDataResponse $putRegistryCatalogDataResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\PutRegistryCatalogDataResponse $putRegistryCatalogDataResponse = null;
    
    /**
     * ServerException
     * 
     * @var mixed $serverException
     */
	
    public mixed $serverException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * UnsupportedCommandException
     * 
     * @var mixed $unsupportedCommandException
     */
	
    public mixed $unsupportedCommandException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->invalidParameterException = null;
		$this->putRegistryCatalogDataResponse = null;
		$this->serverException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->unsupportedCommandException = null;
	}
}
