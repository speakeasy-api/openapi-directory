package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateResponsePlanOutput {
    @JsonProperty("arn")
    public String arn;
    public CreateResponsePlanOutput withArn(String arn) {
        this.arn = arn;
        return this;
    }
}