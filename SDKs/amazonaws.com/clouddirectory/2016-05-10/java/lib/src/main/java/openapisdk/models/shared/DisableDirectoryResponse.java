package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableDirectoryResponse {
    @JsonProperty("DirectoryArn")
    public String directoryArn;
    public DisableDirectoryResponse withDirectoryArn(String directoryArn) {
        this.directoryArn = directoryArn;
        return this;
    }
}