package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchCreateTableRowsResult {
    @JsonProperty("createdRows")
    public java.util.Map<String, String> createdRows;
    public BatchCreateTableRowsResult withCreatedRows(java.util.Map<String, String> createdRows) {
        this.createdRows = createdRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedBatchItems")
    public FailedBatchItem[] failedBatchItems;
    public BatchCreateTableRowsResult withFailedBatchItems(FailedBatchItem[] failedBatchItems) {
        this.failedBatchItems = failedBatchItems;
        return this;
    }
    @JsonProperty("workbookCursor")
    public Long workbookCursor;
    public BatchCreateTableRowsResult withWorkbookCursor(Long workbookCursor) {
        this.workbookCursor = workbookCursor;
        return this;
    }
}