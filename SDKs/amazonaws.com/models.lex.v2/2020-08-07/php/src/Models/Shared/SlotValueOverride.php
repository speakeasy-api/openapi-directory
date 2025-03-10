<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SlotValueOverride - The slot values that Amazon Lex uses when it sets slot values in a dialog step.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SlotValueOverride
{
	#[\JMS\Serializer\Annotation\SerializedName('value')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\SlotValue')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SlotValue $value = null;
    
    /**
     * $values
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\SlotValueOverride> $values
     */
	#[\JMS\Serializer\Annotation\SerializedName('values')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\SlotValueOverride>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $values = null;
    
	public function __construct()
	{
		$this->value = null;
		$this->values = null;
	}
}
