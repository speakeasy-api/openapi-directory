package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContainerApiMetadataResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String>[] metadata;
    public GetContainerApiMetadataResult withMetadata(java.util.Map<String, String>[] metadata) {
        this.metadata = metadata;
        return this;
    }
}