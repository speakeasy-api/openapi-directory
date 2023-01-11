package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTaskDefinitionFamiliesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("families")
    public String[] families;
    public ListTaskDefinitionFamiliesResponse withFamilies(String[] families) {
        this.families = families;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTaskDefinitionFamiliesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}