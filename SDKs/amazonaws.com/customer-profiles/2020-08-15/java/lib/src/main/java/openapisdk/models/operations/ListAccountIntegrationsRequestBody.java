package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAccountIntegrationsRequestBody {
    @JsonProperty("Uri")
    public String uri;
    public ListAccountIntegrationsRequestBody withUri(String uri) {
        this.uri = uri;
        return this;
    }
}