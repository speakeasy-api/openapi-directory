<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DELETEScreenUsingDELETEResponse
{
	
    public string $contentType;
    
    /**
     * OK
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ManageResult $manageResult
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ManageResult $manageResult = null;
    
    /**
     * json error
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\MessageModel $messageModel
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\MessageModel $messageModel = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->manageResult = null;
		$this->messageModel = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
