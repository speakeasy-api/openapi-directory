package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFargateProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fargateProfileNames")
    public String[] fargateProfileNames;
    public ListFargateProfilesResponse withFargateProfileNames(String[] fargateProfileNames) {
        this.fargateProfileNames = fargateProfileNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFargateProfilesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}