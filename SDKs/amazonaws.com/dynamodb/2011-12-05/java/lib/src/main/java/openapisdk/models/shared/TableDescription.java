package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TableDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public TableDescription withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ItemCount")
    public Long itemCount;
    public TableDescription withItemCount(Long itemCount) {
        this.itemCount = itemCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeySchema")
    public KeySchema keySchema;
    public TableDescription withKeySchema(KeySchema keySchema) {
        this.keySchema = keySchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedThroughput")
    public ProvisionedThroughputDescription provisionedThroughput;
    public TableDescription withProvisionedThroughput(ProvisionedThroughputDescription provisionedThroughput) {
        this.provisionedThroughput = provisionedThroughput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableName")
    public String tableName;
    public TableDescription withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableSizeBytes")
    public Long tableSizeBytes;
    public TableDescription withTableSizeBytes(Long tableSizeBytes) {
        this.tableSizeBytes = tableSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableStatus")
    public TableStatusEnum tableStatus;
    public TableDescription withTableStatus(TableStatusEnum tableStatus) {
        this.tableStatus = tableStatus;
        return this;
    }
}