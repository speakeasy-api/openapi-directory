package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResponsePlanRequestBody {
    @JsonProperty("arn")
    public String arn;
    public DeleteResponsePlanRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}