package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProvisionedProductOutputsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public GetProvisionedProductOutputsOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Outputs")
    public RecordOutput[] outputs;
    public GetProvisionedProductOutputsOutput withOutputs(RecordOutput[] outputs) {
        this.outputs = outputs;
        return this;
    }
}