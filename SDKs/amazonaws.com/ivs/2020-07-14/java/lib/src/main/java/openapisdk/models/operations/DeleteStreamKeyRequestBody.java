package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteStreamKeyRequestBody {
    @JsonProperty("arn")
    public String arn;
    public DeleteStreamKeyRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}