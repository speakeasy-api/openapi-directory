package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLaunchProfileMemberResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member")
    public LaunchProfileMembership member;
    public UpdateLaunchProfileMemberResponse withMember(LaunchProfileMembership member) {
        this.member = member;
        return this;
    }
}