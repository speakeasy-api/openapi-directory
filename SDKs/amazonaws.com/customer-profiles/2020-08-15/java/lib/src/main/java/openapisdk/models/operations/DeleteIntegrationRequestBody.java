package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteIntegrationRequestBody {
    @JsonProperty("Uri")
    public String uri;
    public DeleteIntegrationRequestBody withUri(String uri) {
        this.uri = uri;
        return this;
    }
}