package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateReplicationSetOutput {
    @JsonProperty("arn")
    public String arn;
    public CreateReplicationSetOutput withArn(String arn) {
        this.arn = arn;
        return this;
    }
}