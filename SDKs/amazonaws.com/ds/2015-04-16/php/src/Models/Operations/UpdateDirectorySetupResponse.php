<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateDirectorySetupResponse
{
    /**
     * AccessDeniedException
     * 
     * @var mixed $accessDeniedException
     */
	
    public mixed $accessDeniedException = null;
    
    /**
     * ClientException
     * 
     * @var mixed $clientException
     */
	
    public mixed $clientException = null;
    
	
    public string $contentType;
    
    /**
     * DirectoryDoesNotExistException
     * 
     * @var mixed $directoryDoesNotExistException
     */
	
    public mixed $directoryDoesNotExistException = null;
    
    /**
     * DirectoryInDesiredStateException
     * 
     * @var mixed $directoryInDesiredStateException
     */
	
    public mixed $directoryInDesiredStateException = null;
    
    /**
     * DirectoryUnavailableException
     * 
     * @var mixed $directoryUnavailableException
     */
	
    public mixed $directoryUnavailableException = null;
    
    /**
     * InvalidParameterException
     * 
     * @var mixed $invalidParameterException
     */
	
    public mixed $invalidParameterException = null;
    
    /**
     * SnapshotLimitExceededException
     * 
     * @var mixed $snapshotLimitExceededException
     */
	
    public mixed $snapshotLimitExceededException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ServiceException
     * 
     * @var mixed $serviceException
     */
	
    public mixed $serviceException = null;
    
    /**
     * UnsupportedOperationException
     * 
     * @var mixed $unsupportedOperationException
     */
	
    public mixed $unsupportedOperationException = null;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $updateDirectorySetupResult
     */
	
    public ?array $updateDirectorySetupResult = null;
    
	public function __construct()
	{
		$this->accessDeniedException = null;
		$this->clientException = null;
		$this->contentType = "";
		$this->directoryDoesNotExistException = null;
		$this->directoryInDesiredStateException = null;
		$this->directoryUnavailableException = null;
		$this->invalidParameterException = null;
		$this->snapshotLimitExceededException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->serviceException = null;
		$this->unsupportedOperationException = null;
		$this->updateDirectorySetupResult = null;
	}
}
