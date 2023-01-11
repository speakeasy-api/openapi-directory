package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetChannelRequestBody {
    @JsonProperty("arns")
    public String[] arns;
    public BatchGetChannelRequestBody withArns(String[] arns) {
        this.arns = arns;
        return this;
    }
}