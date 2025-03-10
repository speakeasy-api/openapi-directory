<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PresignedUrl - Presigned URL information
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PresignedUrl
{
    /**
     * Corresponding part number
     * 
     * @var int $partNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('partNumber')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $partNumber;
    
    /**
     * S3 presigned URL
     * 
     * @var string $url
     */
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $url;
    
	public function __construct()
	{
		$this->partNumber = 0;
		$this->url = "";
	}
}
