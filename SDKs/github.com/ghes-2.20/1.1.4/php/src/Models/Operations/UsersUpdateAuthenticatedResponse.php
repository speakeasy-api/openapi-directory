<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UsersUpdateAuthenticatedResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Requires authentication
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BasicError $basicError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\BasicError $basicError = null;
    
    /**
     * Response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PrivateUser $privateUser
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\PrivateUser $privateUser = null;
    
    /**
     * Validation failed
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ValidationError $validationError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ValidationError $validationError = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->basicError = null;
		$this->privateUser = null;
		$this->validationError = null;
	}
}
