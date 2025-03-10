<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetSeries200ApplicationVndApiPlusJson - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetSeries200ApplicationVndApiPlusJson
{
    /**
     * $data
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Series> $data
     */
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Series>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $data = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('links')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Links')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\Links $links = null;
    
	public function __construct()
	{
		$this->data = null;
		$this->links = null;
	}
}
