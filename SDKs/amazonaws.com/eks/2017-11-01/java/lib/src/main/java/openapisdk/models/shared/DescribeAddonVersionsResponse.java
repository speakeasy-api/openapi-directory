package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAddonVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addons")
    public AddonInfo[] addons;
    public DescribeAddonVersionsResponse withAddons(AddonInfo[] addons) {
        this.addons = addons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeAddonVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}