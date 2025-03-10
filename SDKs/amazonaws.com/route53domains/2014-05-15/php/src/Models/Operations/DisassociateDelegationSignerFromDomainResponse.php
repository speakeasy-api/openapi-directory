<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DisassociateDelegationSignerFromDomainResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DisassociateDelegationSignerFromDomainResponse $disassociateDelegationSignerFromDomainResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\DisassociateDelegationSignerFromDomainResponse $disassociateDelegationSignerFromDomainResponse = null;
    
    /**
     * DuplicateRequest
     * 
     * @var mixed $duplicateRequest
     */
	
    public mixed $duplicateRequest = null;
    
    /**
     * InvalidInput
     * 
     * @var mixed $invalidInput
     */
	
    public mixed $invalidInput = null;
    
    /**
     * OperationLimitExceeded
     * 
     * @var mixed $operationLimitExceeded
     */
	
    public mixed $operationLimitExceeded = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * TLDRulesViolation
     * 
     * @var mixed $tldRulesViolation
     */
	
    public mixed $tldRulesViolation = null;
    
    /**
     * UnsupportedTLD
     * 
     * @var mixed $unsupportedTLD
     */
	
    public mixed $unsupportedTLD = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->disassociateDelegationSignerFromDomainResponse = null;
		$this->duplicateRequest = null;
		$this->invalidInput = null;
		$this->operationLimitExceeded = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->tldRulesViolation = null;
		$this->unsupportedTLD = null;
	}
}
