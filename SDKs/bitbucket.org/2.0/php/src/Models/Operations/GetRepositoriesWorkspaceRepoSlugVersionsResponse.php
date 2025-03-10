<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetRepositoriesWorkspaceRepoSlugVersionsResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * The specified repository does not exist or does not have the issue tracker enabled.
     * 
     * @var ?array<string, mixed> $error
     */
	
    public ?array $error = null;
    
    /**
     * The versions that have been defined in the issue tracker.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PaginatedVersions $paginatedVersions
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\PaginatedVersions $paginatedVersions = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->error = null;
		$this->paginatedVersions = null;
	}
}
