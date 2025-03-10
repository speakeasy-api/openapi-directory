<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * LinkedSupplier - The supplier this entity is linked to.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class LinkedSupplier
{
	#[\JMS\Serializer\Annotation\SerializedName('address')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Address')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Address $address = null;
    
    /**
     * The company name of the supplier.
     * 
     * @var ?string $companyName
     */
	#[\JMS\Serializer\Annotation\SerializedName('company_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $companyName = null;
    
    /**
     * The display name of the supplier.
     * 
     * @var ?string $displayName
     */
	#[\JMS\Serializer\Annotation\SerializedName('display_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $displayName = null;
    
    /**
     * The ID of the supplier this entity is linked to.
     * 
     * @var string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $id;
    
	public function __construct()
	{
		$this->address = null;
		$this->companyName = null;
		$this->displayName = null;
		$this->id = "";
	}
}
