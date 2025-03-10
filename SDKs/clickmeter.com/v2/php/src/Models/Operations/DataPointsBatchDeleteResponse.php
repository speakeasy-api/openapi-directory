<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DataPointsBatchDeleteResponse
{
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64 $apiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64 = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->apiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64 = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
