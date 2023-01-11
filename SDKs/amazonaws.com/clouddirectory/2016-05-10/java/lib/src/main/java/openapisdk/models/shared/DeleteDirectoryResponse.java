package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDirectoryResponse {
    @JsonProperty("DirectoryArn")
    public String directoryArn;
    public DeleteDirectoryResponse withDirectoryArn(String directoryArn) {
        this.directoryArn = directoryArn;
        return this;
    }
}