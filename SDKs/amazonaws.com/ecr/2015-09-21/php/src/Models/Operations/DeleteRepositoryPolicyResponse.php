<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DeleteRepositoryPolicyResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DeleteRepositoryPolicyResponse $deleteRepositoryPolicyResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\DeleteRepositoryPolicyResponse $deleteRepositoryPolicyResponse = null;
    
    /**
     * InvalidParameterException
     * 
     * @var mixed $invalidParameterException
     */
	
    public mixed $invalidParameterException = null;
    
    /**
     * RepositoryNotFoundException
     * 
     * @var mixed $repositoryNotFoundException
     */
	
    public mixed $repositoryNotFoundException = null;
    
    /**
     * RepositoryPolicyNotFoundException
     * 
     * @var mixed $repositoryPolicyNotFoundException
     */
	
    public mixed $repositoryPolicyNotFoundException = null;
    
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
		$this->contentType = "";
		$this->deleteRepositoryPolicyResponse = null;
		$this->invalidParameterException = null;
		$this->repositoryNotFoundException = null;
		$this->repositoryPolicyNotFoundException = null;
		$this->serverException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
