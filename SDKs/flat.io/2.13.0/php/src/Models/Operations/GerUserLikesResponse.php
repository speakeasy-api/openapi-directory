<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GerUserLikesResponse
{
	
    public string $contentType;
    
    /**
     * Error
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\FlatErrorResponse $flatErrorResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\FlatErrorResponse $flatErrorResponse = null;
    
    /**
     * List of liked scores
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ScoreDetails> $scoreDetails
     */
	
    public ?array $scoreDetails = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->flatErrorResponse = null;
		$this->scoreDetails = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
