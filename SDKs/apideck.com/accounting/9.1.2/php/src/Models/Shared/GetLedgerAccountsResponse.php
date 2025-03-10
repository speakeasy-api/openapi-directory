<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetLedgerAccountsResponse - LedgerAccounts
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetLedgerAccountsResponse
{
    /**
     * $data
     * 
     * @var array<array<string, mixed>> $data
     */
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('array<array<string, mixed>>')]
    public array $data;
    
    /**
     * Links to navigate to previous or next pages through the API
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Links $links
     */
	#[\JMS\Serializer\Annotation\SerializedName('links')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Links')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Links $links = null;
    
    /**
     * Response metadata
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Meta $meta
     */
	#[\JMS\Serializer\Annotation\SerializedName('meta')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Meta')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Meta $meta = null;
    
    /**
     * Operation performed
     * 
     * @var string $operation
     */
	#[\JMS\Serializer\Annotation\SerializedName('operation')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $operation;
    
    /**
     * Unified API resource name
     * 
     * @var string $resource
     */
	#[\JMS\Serializer\Annotation\SerializedName('resource')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $resource;
    
    /**
     * Apideck ID of service provider
     * 
     * @var string $service
     */
	#[\JMS\Serializer\Annotation\SerializedName('service')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $service;
    
    /**
     * HTTP Response Status
     * 
     * @var string $status
     */
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $status;
    
    /**
     * HTTP Response Status Code
     * 
     * @var int $statusCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('status_code')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $statusCode;
    
	public function __construct()
	{
		$this->data = [];
		$this->links = null;
		$this->meta = null;
		$this->operation = "";
		$this->resource = "";
		$this->service = "";
		$this->status = "";
		$this->statusCode = 0;
	}
}
