<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetSchedulesScheduleAByZipResponse
{
	
    public string $contentType;
    
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ScheduleAByZipPage $scheduleAByZipPage = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->scheduleAByZipPage = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
