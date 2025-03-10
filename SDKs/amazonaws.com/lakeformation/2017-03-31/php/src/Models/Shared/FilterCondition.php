<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * FilterCondition - This structure describes the filtering of columns in a table based on a filter condition.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class FilterCondition
{
	#[\JMS\Serializer\Annotation\SerializedName('ComparisonOperator')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ComparisonOperatorEnum $comparisonOperator = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Field')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\FieldNameStringEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?FieldNameStringEnum $field = null;
    
    /**
     * $stringValueList
     * 
     * @var ?array<string> $stringValueList
     */
	#[\JMS\Serializer\Annotation\SerializedName('StringValueList')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $stringValueList = null;
    
	public function __construct()
	{
		$this->comparisonOperator = null;
		$this->field = null;
		$this->stringValueList = null;
	}
}
