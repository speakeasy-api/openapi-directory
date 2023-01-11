package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetStreamKeyRequestBody {
    @JsonProperty("arns")
    public String[] arns;
    public BatchGetStreamKeyRequestBody withArns(String[] arns) {
        this.arns = arns;
        return this;
    }
}