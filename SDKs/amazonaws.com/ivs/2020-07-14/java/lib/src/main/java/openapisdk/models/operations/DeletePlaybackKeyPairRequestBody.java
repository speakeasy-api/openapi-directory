package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePlaybackKeyPairRequestBody {
    @JsonProperty("arn")
    public String arn;
    public DeletePlaybackKeyPairRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}