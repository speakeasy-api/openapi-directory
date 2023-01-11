package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnableLdapsRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public EnableLdapsRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("Type")
    public LdapsTypeEnum type;
    public EnableLdapsRequest withType(LdapsTypeEnum type) {
        this.type = type;
        return this;
    }
}