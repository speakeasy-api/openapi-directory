<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ListSignalingChannelsRequestBodyChannelNameCondition - An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ListSignalingChannelsRequestBodyChannelNameCondition
{
	#[\JMS\Serializer\Annotation\SerializedName('ComparisonOperator')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum $comparisonOperator = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ComparisonValue')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $comparisonValue = null;
    
	public function __construct()
	{
		$this->comparisonOperator = null;
		$this->comparisonValue = null;
	}
}
