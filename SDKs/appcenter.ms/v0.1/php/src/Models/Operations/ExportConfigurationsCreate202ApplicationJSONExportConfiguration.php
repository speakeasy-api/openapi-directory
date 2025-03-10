<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ExportConfigurationsCreate202ApplicationJSONExportConfiguration - Export configuration
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ExportConfigurationsCreate202ApplicationJSONExportConfiguration
{
    /**
     * Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
     * 
     * @var ?bool $backfill
     */
	#[\JMS\Serializer\Annotation\SerializedName('backfill')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $backfill = null;
    
    /**
     * $exportEntities
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsCreate202ApplicationJSONExportConfigurationExportEntitiesEnum> $exportEntities
     */
	#[\JMS\Serializer\Annotation\SerializedName('export_entities')]
    #[\JMS\Serializer\Annotation\Type('array<enum<OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsCreate202ApplicationJSONExportConfigurationExportEntitiesEnum>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $exportEntities = null;
    
    /**
     * The resource group name on azure
     * 
     * @var ?string $resourceGroup
     */
	#[\JMS\Serializer\Annotation\SerializedName('resource_group')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resourceGroup = null;
    
    /**
     * The resource name on azure
     * 
     * @var ?string $resourceName
     */
	#[\JMS\Serializer\Annotation\SerializedName('resource_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resourceName = null;
    
    /**
     * Type of export configuration
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsCreate202ApplicationJSONExportConfigurationTypeEnum $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsCreate202ApplicationJSONExportConfigurationTypeEnum>')]
    public ExportConfigurationsCreate202ApplicationJSONExportConfigurationTypeEnum $type;
    
	public function __construct()
	{
		$this->backfill = null;
		$this->exportEntities = null;
		$this->resourceGroup = null;
		$this->resourceName = null;
		$this->type = \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsCreate202ApplicationJSONExportConfigurationTypeEnum::BLOB_STORAGE_CONNECTION_STRING;
	}
}
