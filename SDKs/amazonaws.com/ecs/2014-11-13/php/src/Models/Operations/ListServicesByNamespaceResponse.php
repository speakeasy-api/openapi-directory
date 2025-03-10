<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListServicesByNamespaceResponse
{
    /**
     * ClientException
     * 
     * @var mixed $clientException
     */
	
    public mixed $clientException = null;
    
	
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
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListServicesByNamespaceResponse $listServicesByNamespaceResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListServicesByNamespaceResponse $listServicesByNamespaceResponse = null;
    
    /**
     * NamespaceNotFoundException
     * 
     * @var mixed $namespaceNotFoundException
     */
	
    public mixed $namespaceNotFoundException = null;
    
    /**
     * ServerException
     * 
     * @var mixed $serverException
     */
	
    public mixed $serverException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->clientException = null;
		$this->contentType = "";
		$this->invalidParameterException = null;
		$this->listServicesByNamespaceResponse = null;
		$this->namespaceNotFoundException = null;
		$this->serverException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
