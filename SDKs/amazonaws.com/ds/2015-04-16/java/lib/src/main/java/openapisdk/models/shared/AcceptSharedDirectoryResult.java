package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptSharedDirectoryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedDirectory")
    public SharedDirectory sharedDirectory;
    public AcceptSharedDirectoryResult withSharedDirectory(SharedDirectory sharedDirectory) {
        this.sharedDirectory = sharedDirectory;
        return this;
    }
}