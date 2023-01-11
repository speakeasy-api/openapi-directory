package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListControlsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlMetadataList")
    public ControlMetadata[] controlMetadataList;
    public ListControlsResponse withControlMetadataList(ControlMetadata[] controlMetadataList) {
        this.controlMetadataList = controlMetadataList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListControlsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}