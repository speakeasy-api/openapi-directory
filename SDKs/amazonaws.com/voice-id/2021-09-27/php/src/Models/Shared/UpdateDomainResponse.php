<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UpdateDomainResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UpdateDomainResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('Domain')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Domain')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Domain $domain = null;
    
	public function __construct()
	{
		$this->domain = null;
	}
}
