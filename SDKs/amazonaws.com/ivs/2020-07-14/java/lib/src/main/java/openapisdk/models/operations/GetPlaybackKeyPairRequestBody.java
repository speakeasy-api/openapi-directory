package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPlaybackKeyPairRequestBody {
    @JsonProperty("arn")
    public String arn;
    public GetPlaybackKeyPairRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}