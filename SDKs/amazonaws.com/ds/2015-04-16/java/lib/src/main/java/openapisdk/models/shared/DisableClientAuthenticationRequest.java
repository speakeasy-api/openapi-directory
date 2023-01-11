package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableClientAuthenticationRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DisableClientAuthenticationRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("Type")
    public ClientAuthenticationTypeEnum type;
    public DisableClientAuthenticationRequest withType(ClientAuthenticationTypeEnum type) {
        this.type = type;
        return this;
    }
}