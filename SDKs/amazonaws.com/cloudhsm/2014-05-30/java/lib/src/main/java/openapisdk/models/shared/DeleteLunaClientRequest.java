package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLunaClientRequest {
    @JsonProperty("ClientArn")
    public String clientArn;
    public DeleteLunaClientRequest withClientArn(String clientArn) {
        this.clientArn = clientArn;
        return this;
    }
}