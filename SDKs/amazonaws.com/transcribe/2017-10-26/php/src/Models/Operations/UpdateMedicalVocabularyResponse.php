<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateMedicalVocabularyResponse
{
    /**
     * BadRequestException
     * 
     * @var mixed $badRequestException
     */
	
    public mixed $badRequestException = null;
    
    /**
     * ConflictException
     * 
     * @var mixed $conflictException
     */
	
    public mixed $conflictException = null;
    
	
    public string $contentType;
    
    /**
     * InternalFailureException
     * 
     * @var mixed $internalFailureException
     */
	
    public mixed $internalFailureException = null;
    
    /**
     * LimitExceededException
     * 
     * @var mixed $limitExceededException
     */
	
    public mixed $limitExceededException = null;
    
    /**
     * NotFoundException
     * 
     * @var mixed $notFoundException
     */
	
    public mixed $notFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\UpdateMedicalVocabularyResponse $updateMedicalVocabularyResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\UpdateMedicalVocabularyResponse $updateMedicalVocabularyResponse = null;
    
	public function __construct()
	{
		$this->badRequestException = null;
		$this->conflictException = null;
		$this->contentType = "";
		$this->internalFailureException = null;
		$this->limitExceededException = null;
		$this->notFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->updateMedicalVocabularyResponse = null;
	}
}
