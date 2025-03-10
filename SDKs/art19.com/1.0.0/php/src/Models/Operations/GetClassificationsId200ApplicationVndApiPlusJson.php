<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetClassificationsId200ApplicationVndApiPlusJson - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetClassificationsId200ApplicationVndApiPlusJson
{
    /**
     * A classification, in general, is something that can describe other resources, such as countries, genres or
     * 
     * languages. How they're described (included or excluded, and whether they're the primary classification
     * of this type) is handled using other resources. Different functions of ART19 rely on classifications differently,
     * and could have an effect only on directory information, or may have an effect on ad decisioning.
     * 
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Classification $data
     */
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Classification')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\Classification $data = null;
    
    /**
     * Links related to the retrieved resource
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ResourceLink $links
     */
	#[\JMS\Serializer\Annotation\SerializedName('links')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ResourceLink')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\ResourceLink $links = null;
    
	public function __construct()
	{
		$this->data = null;
		$this->links = null;
	}
}
