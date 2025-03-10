<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * AddLFTagsToResourceRequestBodyResource - A structure for the resource.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class AddLFTagsToResourceRequestBodyResource
{
    /**
     * $catalog
     * 
     * @var ?array<string, mixed> $catalog
     */
	#[\JMS\Serializer\Annotation\SerializedName('Catalog')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $catalog = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DataCellsFilter')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DataCellsFilterResource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\DataCellsFilterResource $dataCellsFilter = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DataLocation')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DataLocationResource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\DataLocationResource $dataLocation = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Database')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DatabaseResource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\DatabaseResource $database = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LFTag')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LFTagKeyResource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\LFTagKeyResource $lfTag = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LFTagPolicy')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LFTagPolicyResource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\LFTagPolicyResource $lfTagPolicy = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Table')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TableResource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\TableResource $table = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TableWithColumns')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TableWithColumnsResource')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\TableWithColumnsResource $tableWithColumns = null;
    
	public function __construct()
	{
		$this->catalog = null;
		$this->dataCellsFilter = null;
		$this->dataLocation = null;
		$this->database = null;
		$this->lfTag = null;
		$this->lfTagPolicy = null;
		$this->table = null;
		$this->tableWithColumns = null;
	}
}
