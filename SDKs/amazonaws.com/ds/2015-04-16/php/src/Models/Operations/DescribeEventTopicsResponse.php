<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DescribeEventTopicsResponse
{
    /**
     * ClientException
     * 
     * @var mixed $clientException
     */
	
    public mixed $clientException = null;
    
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DescribeEventTopicsResult $describeEventTopicsResult
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\DescribeEventTopicsResult $describeEventTopicsResult = null;
    
    /**
     * EntityDoesNotExistException
     * 
     * @var mixed $entityDoesNotExistException
     */
	
    public mixed $entityDoesNotExistException = null;
    
    /**
     * InvalidParameterException
     * 
     * @var mixed $invalidParameterException
     */
	
    public mixed $invalidParameterException = null;
    
    /**
     * ServiceException
     * 
     * @var mixed $serviceException
     */
	
    public mixed $serviceException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->clientException = null;
		$this->contentType = "";
		$this->describeEventTopicsResult = null;
		$this->entityDoesNotExistException = null;
		$this->invalidParameterException = null;
		$this->serviceException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
