<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * PostConnectors200ApplicationJSON - Returns the new connector object
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class PostConnectors200ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $message = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ok')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $ok = null;
    
    /**
     * $result
     * 
     * @var ?array<string, mixed> $result
     */
	#[\JMS\Serializer\Annotation\SerializedName('result')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $result = null;
    
	public function __construct()
	{
		$this->message = null;
		$this->ok = null;
		$this->result = null;
	}
}
