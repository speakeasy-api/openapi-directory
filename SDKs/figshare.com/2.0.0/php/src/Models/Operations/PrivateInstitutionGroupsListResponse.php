<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PrivateInstitutionGroupsListResponse
{
	
    public string $contentType;
    
    /**
     * Forbidden
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorMessage $errorMessage
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ErrorMessage $errorMessage = null;
    
    /**
     * OK. An array of Groups
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Group> $groups
     */
	
    public ?array $groups = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->errorMessage = null;
		$this->groups = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
