package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteGraphRequestBody {
    @JsonProperty("GraphArn")
    public String graphArn;
    public DeleteGraphRequestBody withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
}