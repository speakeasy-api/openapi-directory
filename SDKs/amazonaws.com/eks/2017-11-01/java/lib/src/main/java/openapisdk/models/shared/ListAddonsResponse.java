package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAddonsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addons")
    public String[] addons;
    public ListAddonsResponse withAddons(String[] addons) {
        this.addons = addons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAddonsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}