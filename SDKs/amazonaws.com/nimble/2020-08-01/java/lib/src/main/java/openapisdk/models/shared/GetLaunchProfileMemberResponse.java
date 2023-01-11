package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLaunchProfileMemberResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member")
    public LaunchProfileMembership member;
    public GetLaunchProfileMemberResponse withMember(LaunchProfileMembership member) {
        this.member = member;
        return this;
    }
}