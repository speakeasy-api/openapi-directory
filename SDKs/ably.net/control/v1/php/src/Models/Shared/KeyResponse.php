<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * KeyResponse - Key created
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class KeyResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('appId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $appId = null;
    
    /**
     * $capability
     * 
     * @var ?array<string, array<string>> $capability
     */
	#[\JMS\Serializer\Annotation\SerializedName('capability')]
    #[\JMS\Serializer\Annotation\Type('array<string, array<string>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $capability = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('created')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $created = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('key')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $key = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('modified')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $modified = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $status = null;
    
	public function __construct()
	{
		$this->appId = null;
		$this->capability = null;
		$this->created = null;
		$this->id = null;
		$this->key = null;
		$this->modified = null;
		$this->name = null;
		$this->status = null;
	}
}
