<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListServerCertificateTagsResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListServerCertificateTagsResponse
{
	
    public ?bool $isTruncated = null;
    
	
    public ?string $marker = null;
    
    /**
     * $tags
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\Tag> $tags
     */
	
    public array $tags;
    
	public function __construct()
	{
		$this->isTruncated = null;
		$this->marker = null;
		$this->tags = [];
	}
}
