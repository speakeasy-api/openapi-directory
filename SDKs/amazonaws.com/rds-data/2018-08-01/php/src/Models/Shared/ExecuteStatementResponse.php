<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ExecuteStatementResponse - The response elements represent the output of a request to run a SQL statement against a database.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ExecuteStatementResponse
{
    /**
     * $columnMetadata
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ColumnMetadata> $columnMetadata
     */
	#[\JMS\Serializer\Annotation\SerializedName('columnMetadata')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ColumnMetadata>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $columnMetadata = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('formattedRecords')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $formattedRecords = null;
    
    /**
     * $generatedFields
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Field> $generatedFields
     */
	#[\JMS\Serializer\Annotation\SerializedName('generatedFields')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Field>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $generatedFields = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('numberOfRecordsUpdated')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $numberOfRecordsUpdated = null;
    
    /**
     * $records
     * 
     * @var ?array<array<\OpenAPI\OpenAPI\Models\Shared\Field>> $records
     */
	#[\JMS\Serializer\Annotation\SerializedName('records')]
    #[\JMS\Serializer\Annotation\Type('array<array<OpenAPI\OpenAPI\Models\Shared\Field>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $records = null;
    
	public function __construct()
	{
		$this->columnMetadata = null;
		$this->formattedRecords = null;
		$this->generatedFields = null;
		$this->numberOfRecordsUpdated = null;
		$this->records = null;
	}
}
