package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListComponentVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentVersions")
    public ComponentVersionListItem[] componentVersions;
    public ListComponentVersionsResponse withComponentVersions(ComponentVersionListItem[] componentVersions) {
        this.componentVersions = componentVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListComponentVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}