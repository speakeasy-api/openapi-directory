package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchCreateTableRowsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public BatchCreateTableRowsRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("rowsToCreate")
    public openapisdk.models.shared.CreateRowData[] rowsToCreate;
    public BatchCreateTableRowsRequestBody withRowsToCreate(openapisdk.models.shared.CreateRowData[] rowsToCreate) {
        this.rowsToCreate = rowsToCreate;
        return this;
    }
}