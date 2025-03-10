<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PutAuditEventsResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PutAuditEventsResponse
{
    /**
     * $failed
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\ResultErrorEntry> $failed
     */
	#[\JMS\Serializer\Annotation\SerializedName('failed')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ResultErrorEntry>')]
    public array $failed;
    
    /**
     * $successful
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\AuditEventResultEntry> $successful
     */
	#[\JMS\Serializer\Annotation\SerializedName('successful')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AuditEventResultEntry>')]
    public array $successful;
    
	public function __construct()
	{
		$this->failed = [];
		$this->successful = [];
	}
}
