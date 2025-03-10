<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetMediaResponse
{
    /**
     * ClientLimitExceededException
     * 
     * @var mixed $clientLimitExceededException
     */
	
    public mixed $clientLimitExceededException = null;
    
    /**
     * ConnectionLimitExceededException
     * 
     * @var mixed $connectionLimitExceededException
     */
	
    public mixed $connectionLimitExceededException = null;
    
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GetMediaOutput $getMediaOutput
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\GetMediaOutput $getMediaOutput = null;
    
    /**
     * InvalidArgumentException
     * 
     * @var mixed $invalidArgumentException
     */
	
    public mixed $invalidArgumentException = null;
    
    /**
     * InvalidEndpointException
     * 
     * @var mixed $invalidEndpointException
     */
	
    public mixed $invalidEndpointException = null;
    
    /**
     * NotAuthorizedException
     * 
     * @var mixed $notAuthorizedException
     */
	
    public mixed $notAuthorizedException = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->clientLimitExceededException = null;
		$this->connectionLimitExceededException = null;
		$this->contentType = "";
		$this->getMediaOutput = null;
		$this->invalidArgumentException = null;
		$this->invalidEndpointException = null;
		$this->notAuthorizedException = null;
		$this->resourceNotFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
