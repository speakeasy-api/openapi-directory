<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CaseSummary - Case summary information.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CaseSummary
{
	#[\JMS\Serializer\Annotation\SerializedName('caseId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $caseId;
    
	#[\JMS\Serializer\Annotation\SerializedName('templateId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $templateId;
    
	public function __construct()
	{
		$this->caseId = "";
		$this->templateId = "";
	}
}
