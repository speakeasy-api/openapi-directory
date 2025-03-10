<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesResponse
{
	
    public string $contentType;
    
    /**
     * OK - the request has succeeded.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GeneratePciDescriptionResponse $generatePciDescriptionResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\GeneratePciDescriptionResponse $generatePciDescriptionResponse = null;
    
    /**
     * Bad Request - a problem reading or understanding the request.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ServiceError $serviceError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ServiceError $serviceError = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->generatePciDescriptionResponse = null;
		$this->serviceError = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
