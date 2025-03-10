<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * AnalyticsEventCountDefaultApplicationJSON - Error
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class AnalyticsEventCountDefaultApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('error')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\AnalyticsEventCountDefaultApplicationJSONError')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AnalyticsEventCountDefaultApplicationJSONError $error = null;
    
	public function __construct()
	{
		$this->error = null;
	}
}
