package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListComponentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("components")
    public Component[] components;
    public ListComponentsResponse withComponents(Component[] components) {
        this.components = components;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListComponentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}