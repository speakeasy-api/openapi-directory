<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetAccountingAccountingArrayV2AccountingV2Warehouse
{
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $id = null;
    
    /**
     * Name of the merchant
     * 
     * @var ?string $shortName
     */
	#[\JMS\Serializer\Annotation\SerializedName('shortName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $shortName = null;
    
	public function __construct()
	{
		$this->id = null;
		$this->shortName = null;
	}
}
