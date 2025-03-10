<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class SitemapsReportSitemapError
{
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $message;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $type;
    
	public function __construct()
	{
		$this->message = "";
		$this->type = "";
	}
}
