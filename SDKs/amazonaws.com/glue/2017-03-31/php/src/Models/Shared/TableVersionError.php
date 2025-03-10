<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * TableVersionError - An error record for table-version operations.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class TableVersionError
{
	#[\JMS\Serializer\Annotation\SerializedName('ErrorDetail')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ErrorDetail')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ErrorDetail $errorDetail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TableName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $tableName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VersionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $versionId = null;
    
	public function __construct()
	{
		$this->errorDetail = null;
		$this->tableName = null;
		$this->versionId = null;
	}
}
