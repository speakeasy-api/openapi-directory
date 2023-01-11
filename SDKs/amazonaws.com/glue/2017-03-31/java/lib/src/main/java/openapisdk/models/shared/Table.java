package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Table
 * Represents a collection of related data organized in columns and rows.
**/
public class Table {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public Table withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public Table withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedBy")
    public String createdBy;
    public Table withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public Table withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Table withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsRegisteredWithLakeFormation")
    public Boolean isRegisteredWithLakeFormation;
    public Table withIsRegisteredWithLakeFormation(Boolean isRegisteredWithLakeFormation) {
        this.isRegisteredWithLakeFormation = isRegisteredWithLakeFormation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastAccessTime")
    public OffsetDateTime lastAccessTime;
    public Table withLastAccessTime(OffsetDateTime lastAccessTime) {
        this.lastAccessTime = lastAccessTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastAnalyzedTime")
    public OffsetDateTime lastAnalyzedTime;
    public Table withLastAnalyzedTime(OffsetDateTime lastAnalyzedTime) {
        this.lastAnalyzedTime = lastAnalyzedTime;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Table withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public Table withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public Table withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartitionKeys")
    public Column[] partitionKeys;
    public Table withPartitionKeys(Column[] partitionKeys) {
        this.partitionKeys = partitionKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Retention")
    public Long retention;
    public Table withRetention(Long retention) {
        this.retention = retention;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageDescriptor")
    public StorageDescriptor storageDescriptor;
    public Table withStorageDescriptor(StorageDescriptor storageDescriptor) {
        this.storageDescriptor = storageDescriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableType")
    public String tableType;
    public Table withTableType(String tableType) {
        this.tableType = tableType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetTable")
    public TableIdentifier targetTable;
    public Table withTargetTable(TableIdentifier targetTable) {
        this.targetTable = targetTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public Table withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViewExpandedText")
    public String viewExpandedText;
    public Table withViewExpandedText(String viewExpandedText) {
        this.viewExpandedText = viewExpandedText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViewOriginalText")
    public String viewOriginalText;
    public Table withViewOriginalText(String viewOriginalText) {
        this.viewOriginalText = viewOriginalText;
        return this;
    }
}