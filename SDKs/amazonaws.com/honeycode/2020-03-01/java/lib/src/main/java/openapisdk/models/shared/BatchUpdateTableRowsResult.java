package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchUpdateTableRowsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedBatchItems")
    public FailedBatchItem[] failedBatchItems;
    public BatchUpdateTableRowsResult withFailedBatchItems(FailedBatchItem[] failedBatchItems) {
        this.failedBatchItems = failedBatchItems;
        return this;
    }
    @JsonProperty("workbookCursor")
    public Long workbookCursor;
    public BatchUpdateTableRowsResult withWorkbookCursor(Long workbookCursor) {
        this.workbookCursor = workbookCursor;
        return this;
    }
}