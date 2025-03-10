<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PredictResponse
{
	
    public string $contentType;
    
    /**
     * InternalServerException
     * 
     * @var mixed $internalServerException
     */
	
    public mixed $internalServerException = null;
    
    /**
     * InvalidInputException
     * 
     * @var mixed $invalidInputException
     */
	
    public mixed $invalidInputException = null;
    
    /**
     * LimitExceededException
     * 
     * @var mixed $limitExceededException
     */
	
    public mixed $limitExceededException = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PredictOutput $predictOutput
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\PredictOutput $predictOutput = null;
    
    /**
     * PredictorNotMountedException
     * 
     * @var mixed $predictorNotMountedException
     */
	
    public mixed $predictorNotMountedException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->internalServerException = null;
		$this->invalidInputException = null;
		$this->limitExceededException = null;
		$this->predictOutput = null;
		$this->predictorNotMountedException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNotFoundException = null;
	}
}
