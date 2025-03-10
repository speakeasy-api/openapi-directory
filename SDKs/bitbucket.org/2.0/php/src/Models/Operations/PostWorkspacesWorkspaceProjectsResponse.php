<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PostWorkspacesWorkspaceProjectsResponse
{
	
    public string $contentType;
    
    /**
     * $headers
     * 
     * @var ?array<string, array<string>> $headers
     */
	
    public ?array $headers = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * The requesting user isn't authorized to create the project.
     * 
     * @var ?array<string, mixed> $error
     */
	
    public ?array $error = null;
    
    /**
     * A new project has been created.
     * 
     * @var ?array<string, mixed> $project
     */
	
    public ?array $project = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->headers = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->error = null;
		$this->project = null;
	}
}
