package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetStreamKeyRequestBody {
    @JsonProperty("arn")
    public String arn;
    public GetStreamKeyRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}