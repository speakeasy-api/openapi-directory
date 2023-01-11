package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInstanceProfilesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceProfiles")
    public InstanceProfile[] instanceProfiles;
    public ListInstanceProfilesResult withInstanceProfiles(InstanceProfile[] instanceProfiles) {
        this.instanceProfiles = instanceProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListInstanceProfilesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}