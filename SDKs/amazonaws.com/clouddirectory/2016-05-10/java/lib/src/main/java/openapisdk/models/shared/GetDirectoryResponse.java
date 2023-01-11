package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDirectoryResponse {
    @JsonProperty("Directory")
    public Directory directory;
    public GetDirectoryResponse withDirectory(Directory directory) {
        this.directory = directory;
        return this;
    }
}