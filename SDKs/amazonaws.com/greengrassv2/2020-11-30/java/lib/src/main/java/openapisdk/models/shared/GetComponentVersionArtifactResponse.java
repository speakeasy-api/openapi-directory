package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetComponentVersionArtifactResponse {
    @JsonProperty("preSignedUrl")
    public String preSignedUrl;
    public GetComponentVersionArtifactResponse withPreSignedUrl(String preSignedUrl) {
        this.preSignedUrl = preSignedUrl;
        return this;
    }
}