package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FunctionsCreateExecutionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public FunctionsCreateExecutionRequestBody withData(String data) {
        this.data = data;
        return this;
    }
}