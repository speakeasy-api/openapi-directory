package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnableDirectoryResponse {
    @JsonProperty("DirectoryArn")
    public String directoryArn;
    public EnableDirectoryResponse withDirectoryArn(String directoryArn) {
        this.directoryArn = directoryArn;
        return this;
    }
}