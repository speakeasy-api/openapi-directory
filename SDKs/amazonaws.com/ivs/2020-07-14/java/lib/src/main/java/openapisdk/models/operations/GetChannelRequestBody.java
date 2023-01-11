package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetChannelRequestBody {
    @JsonProperty("arn")
    public String arn;
    public GetChannelRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}