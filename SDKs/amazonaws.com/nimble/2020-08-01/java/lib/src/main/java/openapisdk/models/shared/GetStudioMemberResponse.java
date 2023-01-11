package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStudioMemberResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member")
    public StudioMembership member;
    public GetStudioMemberResponse withMember(StudioMembership member) {
        this.member = member;
        return this;
    }
}