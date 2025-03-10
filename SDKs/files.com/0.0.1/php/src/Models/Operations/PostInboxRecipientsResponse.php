<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PostInboxRecipientsResponse
{
	
    public string $contentType;
    
    /**
     * The InboxRecipients object.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\InboxRecipientEntity $inboxRecipientEntity
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\InboxRecipientEntity $inboxRecipientEntity = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->inboxRecipientEntity = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
