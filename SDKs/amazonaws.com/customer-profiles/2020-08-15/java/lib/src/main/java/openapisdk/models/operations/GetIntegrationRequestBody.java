package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetIntegrationRequestBody {
    @JsonProperty("Uri")
    public String uri;
    public GetIntegrationRequestBody withUri(String uri) {
        this.uri = uri;
        return this;
    }
}