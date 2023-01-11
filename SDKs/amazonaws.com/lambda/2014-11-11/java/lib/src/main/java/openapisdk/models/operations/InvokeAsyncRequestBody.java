package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InvokeAsyncRequestBody {
    @JsonProperty("InvokeArgs")
    public String invokeArgs;
    public InvokeAsyncRequestBody withInvokeArgs(String invokeArgs) {
        this.invokeArgs = invokeArgs;
        return this;
    }
}