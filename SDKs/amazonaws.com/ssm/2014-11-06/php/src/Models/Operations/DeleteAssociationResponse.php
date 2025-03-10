<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DeleteAssociationResponse
{
    /**
     * AssociationDoesNotExist
     * 
     * @var mixed $associationDoesNotExist
     */
	
    public mixed $associationDoesNotExist = null;
    
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $deleteAssociationResult
     */
	
    public ?array $deleteAssociationResult = null;
    
    /**
     * InternalServerError
     * 
     * @var mixed $internalServerError
     */
	
    public mixed $internalServerError = null;
    
    /**
     * InvalidDocument
     * 
     * @var mixed $invalidDocument
     */
	
    public mixed $invalidDocument = null;
    
    /**
     * InvalidInstanceId
     * 
     * @var mixed $invalidInstanceId
     */
	
    public mixed $invalidInstanceId = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * TooManyUpdates
     * 
     * @var mixed $tooManyUpdates
     */
	
    public mixed $tooManyUpdates = null;
    
	public function __construct()
	{
		$this->associationDoesNotExist = null;
		$this->contentType = "";
		$this->deleteAssociationResult = null;
		$this->internalServerError = null;
		$this->invalidDocument = null;
		$this->invalidInstanceId = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->tooManyUpdates = null;
	}
}
