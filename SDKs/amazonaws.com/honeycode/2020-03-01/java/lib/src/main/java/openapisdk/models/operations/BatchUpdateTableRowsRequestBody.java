package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchUpdateTableRowsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public BatchUpdateTableRowsRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("rowsToUpdate")
    public openapisdk.models.shared.UpdateRowData[] rowsToUpdate;
    public BatchUpdateTableRowsRequestBody withRowsToUpdate(openapisdk.models.shared.UpdateRowData[] rowsToUpdate) {
        this.rowsToUpdate = rowsToUpdate;
        return this;
    }
}