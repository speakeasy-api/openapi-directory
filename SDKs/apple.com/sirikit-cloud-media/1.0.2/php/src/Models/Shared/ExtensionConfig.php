<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ExtensionConfig
{
    /**
     * $hdr
     * 
     * @var ?array<string, mixed> $hdr
     */
	
    public ?array $hdr = null;
    
	
    public ExtensionConfigIntent $intent;
    
	
    public ExtensionConfigMedia $media;
    
	
    public ?string $url = null;
    
	
    public string $version;
    
	public function __construct()
	{
		$this->hdr = null;
		$this->intent = new \OpenAPI\OpenAPI\Models\Shared\ExtensionConfigIntent();
		$this->media = new \OpenAPI\OpenAPI\Models\Shared\ExtensionConfigMedia();
		$this->url = null;
		$this->version = "";
	}
}
