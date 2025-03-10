<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListRobotApplicationsResponse
{
	
    public string $contentType;
    
    /**
     * InternalServerException
     * 
     * @var mixed $internalServerException
     */
	
    public mixed $internalServerException = null;
    
    /**
     * InvalidParameterException
     * 
     * @var mixed $invalidParameterException
     */
	
    public mixed $invalidParameterException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListRobotApplicationsResponse $listRobotApplicationsResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListRobotApplicationsResponse $listRobotApplicationsResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ThrottlingException
     * 
     * @var mixed $throttlingException
     */
	
    public mixed $throttlingException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->internalServerException = null;
		$this->invalidParameterException = null;
		$this->listRobotApplicationsResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->throttlingException = null;
	}
}
