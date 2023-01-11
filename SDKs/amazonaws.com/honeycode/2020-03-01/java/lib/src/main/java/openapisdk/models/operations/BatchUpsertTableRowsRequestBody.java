package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchUpsertTableRowsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public BatchUpsertTableRowsRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("rowsToUpsert")
    public openapisdk.models.shared.UpsertRowData[] rowsToUpsert;
    public BatchUpsertTableRowsRequestBody withRowsToUpsert(openapisdk.models.shared.UpsertRowData[] rowsToUpsert) {
        this.rowsToUpsert = rowsToUpsert;
        return this;
    }
}