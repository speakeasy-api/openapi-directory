<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DeleteConfigRuleResponse
{
	
    public string $contentType;
    
    /**
     * NoSuchConfigRuleException
     * 
     * @var mixed $noSuchConfigRuleException
     */
	
    public mixed $noSuchConfigRuleException = null;
    
    /**
     * ResourceInUseException
     * 
     * @var mixed $resourceInUseException
     */
	
    public mixed $resourceInUseException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->noSuchConfigRuleException = null;
		$this->resourceInUseException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
