<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListLabelingJobsResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListLabelingJobsResponse $listLabelingJobsResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListLabelingJobsResponse $listLabelingJobsResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->listLabelingJobsResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
