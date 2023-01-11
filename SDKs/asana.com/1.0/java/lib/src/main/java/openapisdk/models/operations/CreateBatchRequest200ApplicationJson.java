package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchRequest200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.BatchResponse[] data;
    public CreateBatchRequest200ApplicationJson withData(openapisdk.models.shared.BatchResponse[] data) {
        this.data = data;
        return this;
    }
}