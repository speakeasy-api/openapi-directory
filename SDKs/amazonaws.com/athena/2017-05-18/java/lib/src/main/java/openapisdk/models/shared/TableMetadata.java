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
 * TableMetadata
 * Contains metadata for a table.
**/
public class TableMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Columns")
    public Column[] columns;
    public TableMetadata withColumns(Column[] columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public TableMetadata withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastAccessTime")
    public OffsetDateTime lastAccessTime;
    public TableMetadata withLastAccessTime(OffsetDateTime lastAccessTime) {
        this.lastAccessTime = lastAccessTime;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public TableMetadata withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public TableMetadata withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartitionKeys")
    public Column[] partitionKeys;
    public TableMetadata withPartitionKeys(Column[] partitionKeys) {
        this.partitionKeys = partitionKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableType")
    public String tableType;
    public TableMetadata withTableType(String tableType) {
        this.tableType = tableType;
        return this;
    }
}