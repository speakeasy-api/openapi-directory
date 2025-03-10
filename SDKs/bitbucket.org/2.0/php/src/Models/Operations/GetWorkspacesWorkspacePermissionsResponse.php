<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetWorkspacesWorkspacePermissionsResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * The request wasn't authenticated.
     * 
     * @var ?array<string, mixed> $error
     */
	
    public ?array $error = null;
    
    /**
     * The list of users that are part of a workspace, along with their permission.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PaginatedWorkspaceMemberships $paginatedWorkspaceMemberships
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\PaginatedWorkspaceMemberships $paginatedWorkspaceMemberships = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->error = null;
		$this->paginatedWorkspaceMemberships = null;
	}
}
