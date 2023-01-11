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
 * TableStatistics
 * Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation.
**/
public class TableStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ddls")
    public Long ddls;
    public TableStatistics withDdls(Long ddls) {
        this.ddls = ddls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deletes")
    public Long deletes;
    public TableStatistics withDeletes(Long deletes) {
        this.deletes = deletes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FullLoadCondtnlChkFailedRows")
    public Long fullLoadCondtnlChkFailedRows;
    public TableStatistics withFullLoadCondtnlChkFailedRows(Long fullLoadCondtnlChkFailedRows) {
        this.fullLoadCondtnlChkFailedRows = fullLoadCondtnlChkFailedRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FullLoadEndTime")
    public OffsetDateTime fullLoadEndTime;
    public TableStatistics withFullLoadEndTime(OffsetDateTime fullLoadEndTime) {
        this.fullLoadEndTime = fullLoadEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FullLoadErrorRows")
    public Long fullLoadErrorRows;
    public TableStatistics withFullLoadErrorRows(Long fullLoadErrorRows) {
        this.fullLoadErrorRows = fullLoadErrorRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FullLoadReloaded")
    public Boolean fullLoadReloaded;
    public TableStatistics withFullLoadReloaded(Boolean fullLoadReloaded) {
        this.fullLoadReloaded = fullLoadReloaded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FullLoadRows")
    public Long fullLoadRows;
    public TableStatistics withFullLoadRows(Long fullLoadRows) {
        this.fullLoadRows = fullLoadRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FullLoadStartTime")
    public OffsetDateTime fullLoadStartTime;
    public TableStatistics withFullLoadStartTime(OffsetDateTime fullLoadStartTime) {
        this.fullLoadStartTime = fullLoadStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Inserts")
    public Long inserts;
    public TableStatistics withInserts(Long inserts) {
        this.inserts = inserts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public TableStatistics withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaName")
    public String schemaName;
    public TableStatistics withSchemaName(String schemaName) {
        this.schemaName = schemaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableName")
    public String tableName;
    public TableStatistics withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableState")
    public String tableState;
    public TableStatistics withTableState(String tableState) {
        this.tableState = tableState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Updates")
    public Long updates;
    public TableStatistics withUpdates(Long updates) {
        this.updates = updates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationFailedRecords")
    public Long validationFailedRecords;
    public TableStatistics withValidationFailedRecords(Long validationFailedRecords) {
        this.validationFailedRecords = validationFailedRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationPendingRecords")
    public Long validationPendingRecords;
    public TableStatistics withValidationPendingRecords(Long validationPendingRecords) {
        this.validationPendingRecords = validationPendingRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationState")
    public String validationState;
    public TableStatistics withValidationState(String validationState) {
        this.validationState = validationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationStateDetails")
    public String validationStateDetails;
    public TableStatistics withValidationStateDetails(String validationStateDetails) {
        this.validationStateDetails = validationStateDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationSuspendedRecords")
    public Long validationSuspendedRecords;
    public TableStatistics withValidationSuspendedRecords(Long validationSuspendedRecords) {
        this.validationSuspendedRecords = validationSuspendedRecords;
        return this;
    }
}