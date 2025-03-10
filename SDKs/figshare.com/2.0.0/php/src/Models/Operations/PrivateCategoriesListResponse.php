<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PrivateCategoriesListResponse
{
    /**
     * OK. An array of categories
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Category> $categories
     */
	
    public ?array $categories = null;
    
	
    public string $contentType;
    
    /**
     * Forbidden
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorMessage $errorMessage
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ErrorMessage $errorMessage = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->categories = null;
		$this->contentType = "";
		$this->errorMessage = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
