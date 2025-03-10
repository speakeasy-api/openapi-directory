<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PutResolverRulePolicyResponse
{
    /**
     * AccessDeniedException
     * 
     * @var mixed $accessDeniedException
     */
	
    public mixed $accessDeniedException = null;
    
	
    public string $contentType;
    
    /**
     * InternalServiceErrorException
     * 
     * @var mixed $internalServiceErrorException
     */
	
    public mixed $internalServiceErrorException = null;
    
    /**
     * InvalidParameterException
     * 
     * @var mixed $invalidParameterException
     */
	
    public mixed $invalidParameterException = null;
    
    /**
     * InvalidPolicyDocument
     * 
     * @var mixed $invalidPolicyDocument
     */
	
    public mixed $invalidPolicyDocument = null;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PutResolverRulePolicyResponse $putResolverRulePolicyResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\PutResolverRulePolicyResponse $putResolverRulePolicyResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * UnknownResourceException
     * 
     * @var mixed $unknownResourceException
     */
	
    public mixed $unknownResourceException = null;
    
	public function __construct()
	{
		$this->accessDeniedException = null;
		$this->contentType = "";
		$this->internalServiceErrorException = null;
		$this->invalidParameterException = null;
		$this->invalidPolicyDocument = null;
		$this->putResolverRulePolicyResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->unknownResourceException = null;
	}
}
