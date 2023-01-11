package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnableClientAuthenticationRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public EnableClientAuthenticationRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("Type")
    public ClientAuthenticationTypeEnum type;
    public EnableClientAuthenticationRequest withType(ClientAuthenticationTypeEnum type) {
        this.type = type;
        return this;
    }
}