package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableLdapsRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DisableLdapsRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("Type")
    public LdapsTypeEnum type;
    public DisableLdapsRequest withType(LdapsTypeEnum type) {
        this.type = type;
        return this;
    }
}