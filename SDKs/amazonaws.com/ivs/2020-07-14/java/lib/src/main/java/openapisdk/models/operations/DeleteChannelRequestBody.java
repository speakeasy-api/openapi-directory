package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteChannelRequestBody {
    @JsonProperty("arn")
    public String arn;
    public DeleteChannelRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}