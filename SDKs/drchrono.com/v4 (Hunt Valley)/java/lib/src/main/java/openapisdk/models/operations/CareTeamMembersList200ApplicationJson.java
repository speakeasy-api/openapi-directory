package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CareTeamMembersList200ApplicationJson
 * Paginated Result
**/
public class CareTeamMembersList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.CareTeamMember[] data;
    public CareTeamMembersList200ApplicationJson withData(openapisdk.models.shared.CareTeamMember[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public CareTeamMembersList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public CareTeamMembersList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}