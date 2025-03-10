<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeInsightResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeInsightResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('ProactiveInsight')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ProactiveInsight')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ProactiveInsight $proactiveInsight = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ReactiveInsight')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ReactiveInsight')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ReactiveInsight $reactiveInsight = null;
    
	public function __construct()
	{
		$this->proactiveInsight = null;
		$this->reactiveInsight = null;
	}
}
