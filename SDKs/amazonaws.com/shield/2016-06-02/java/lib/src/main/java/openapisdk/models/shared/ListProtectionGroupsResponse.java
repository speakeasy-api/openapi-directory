package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProtectionGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListProtectionGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ProtectionGroups")
    public ProtectionGroup[] protectionGroups;
    public ListProtectionGroupsResponse withProtectionGroups(ProtectionGroup[] protectionGroups) {
        this.protectionGroups = protectionGroups;
        return this;
    }
}