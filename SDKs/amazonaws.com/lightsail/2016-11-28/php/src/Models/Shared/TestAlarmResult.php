<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * TestAlarmResult - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class TestAlarmResult
{
    /**
     * $operations
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Operation> $operations
     */
	#[\JMS\Serializer\Annotation\SerializedName('operations')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Operation>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $operations = null;
    
	public function __construct()
	{
		$this->operations = null;
	}
}
