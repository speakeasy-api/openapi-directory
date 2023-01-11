package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchRequestRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.BatchRequest data;
    public CreateBatchRequestRequestBody withData(openapisdk.models.shared.BatchRequest data) {
        this.data = data;
        return this;
    }
}