package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListNetworkProfilesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkProfiles")
    public NetworkProfile[] networkProfiles;
    public ListNetworkProfilesResult withNetworkProfiles(NetworkProfile[] networkProfiles) {
        this.networkProfiles = networkProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListNetworkProfilesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}