<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BatchDisassociateClientDeviceFromCoreDeviceResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BatchDisassociateClientDeviceFromCoreDeviceResponse
{
    /**
     * $errorEntries
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\DisassociateClientDeviceFromCoreDeviceErrorEntry> $errorEntries
     */
	#[\JMS\Serializer\Annotation\SerializedName('errorEntries')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\DisassociateClientDeviceFromCoreDeviceErrorEntry>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $errorEntries = null;
    
	public function __construct()
	{
		$this->errorEntries = null;
	}
}
