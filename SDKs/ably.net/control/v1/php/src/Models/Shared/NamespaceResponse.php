<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * NamespaceResponse - Namespace created
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class NamespaceResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('appId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $appId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('authenticated')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $authenticated = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('created')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $created = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('exposeTimeserial')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $exposeTimeserial = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('modified')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $modified = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('persistLast')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $persistLast = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('persisted')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $persisted = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('pushEnabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $pushEnabled = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('tlsOnly')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $tlsOnly = null;
    
	public function __construct()
	{
		$this->appId = null;
		$this->authenticated = null;
		$this->created = null;
		$this->exposeTimeserial = null;
		$this->id = null;
		$this->modified = null;
		$this->persistLast = null;
		$this->persisted = null;
		$this->pushEnabled = null;
		$this->tlsOnly = null;
	}
}
