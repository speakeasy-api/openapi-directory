package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeleteTableRowsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedBatchItems")
    public FailedBatchItem[] failedBatchItems;
    public BatchDeleteTableRowsResult withFailedBatchItems(FailedBatchItem[] failedBatchItems) {
        this.failedBatchItems = failedBatchItems;
        return this;
    }
    @JsonProperty("workbookCursor")
    public Long workbookCursor;
    public BatchDeleteTableRowsResult withWorkbookCursor(Long workbookCursor) {
        this.workbookCursor = workbookCursor;
        return this;
    }
}