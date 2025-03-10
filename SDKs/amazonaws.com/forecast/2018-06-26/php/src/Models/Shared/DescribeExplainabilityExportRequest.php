<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DescribeExplainabilityExportRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('ExplainabilityExportArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $explainabilityExportArn;
    
	public function __construct()
	{
		$this->explainabilityExportArn = "";
	}
}
