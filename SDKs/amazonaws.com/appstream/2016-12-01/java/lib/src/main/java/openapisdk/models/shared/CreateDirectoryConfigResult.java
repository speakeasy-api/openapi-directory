package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDirectoryConfigResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryConfig")
    public DirectoryConfig directoryConfig;
    public CreateDirectoryConfigResult withDirectoryConfig(DirectoryConfig directoryConfig) {
        this.directoryConfig = directoryConfig;
        return this;
    }
}