package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnshareDirectoryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedDirectoryId")
    public String sharedDirectoryId;
    public UnshareDirectoryResult withSharedDirectoryId(String sharedDirectoryId) {
        this.sharedDirectoryId = sharedDirectoryId;
        return this;
    }
}