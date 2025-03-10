<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreatePortfolioResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CreatePortfolioOutput $createPortfolioOutput
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CreatePortfolioOutput $createPortfolioOutput = null;
    
    /**
     * InvalidParametersException
     * 
     * @var mixed $invalidParametersException
     */
	
    public mixed $invalidParametersException = null;
    
    /**
     * LimitExceededException
     * 
     * @var mixed $limitExceededException
     */
	
    public mixed $limitExceededException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * TagOptionNotMigratedException
     * 
     * @var mixed $tagOptionNotMigratedException
     */
	
    public mixed $tagOptionNotMigratedException = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->createPortfolioOutput = null;
		$this->invalidParametersException = null;
		$this->limitExceededException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->tagOptionNotMigratedException = null;
	}
}
