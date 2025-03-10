<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DescribeHostedConnectionsResponse
{
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Connections $connections
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Connections $connections = null;
    
	
    public string $contentType;
    
    /**
     * DirectConnectClientException
     * 
     * @var mixed $directConnectClientException
     */
	
    public mixed $directConnectClientException = null;
    
    /**
     * DirectConnectServerException
     * 
     * @var mixed $directConnectServerException
     */
	
    public mixed $directConnectServerException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->connections = null;
		$this->contentType = "";
		$this->directConnectClientException = null;
		$this->directConnectServerException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
