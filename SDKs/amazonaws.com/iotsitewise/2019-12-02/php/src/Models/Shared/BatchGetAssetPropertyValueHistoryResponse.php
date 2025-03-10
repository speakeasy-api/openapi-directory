<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BatchGetAssetPropertyValueHistoryResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BatchGetAssetPropertyValueHistoryResponse
{
    /**
     * $errorEntries
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\BatchGetAssetPropertyValueHistoryErrorEntry> $errorEntries
     */
	#[\JMS\Serializer\Annotation\SerializedName('errorEntries')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\BatchGetAssetPropertyValueHistoryErrorEntry>')]
    public array $errorEntries;
    
	#[\JMS\Serializer\Annotation\SerializedName('nextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * $skippedEntries
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\BatchGetAssetPropertyValueHistorySkippedEntry> $skippedEntries
     */
	#[\JMS\Serializer\Annotation\SerializedName('skippedEntries')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\BatchGetAssetPropertyValueHistorySkippedEntry>')]
    public array $skippedEntries;
    
    /**
     * $successEntries
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\BatchGetAssetPropertyValueHistorySuccessEntry> $successEntries
     */
	#[\JMS\Serializer\Annotation\SerializedName('successEntries')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\BatchGetAssetPropertyValueHistorySuccessEntry>')]
    public array $successEntries;
    
	public function __construct()
	{
		$this->errorEntries = [];
		$this->nextToken = null;
		$this->skippedEntries = [];
		$this->successEntries = [];
	}
}
