package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubjectTypesTeam {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public SubjectTypesTeamLink events;
    public SubjectTypesTeam withEvents(SubjectTypesTeamLink events) {
        this.events = events;
        return this;
    }
}