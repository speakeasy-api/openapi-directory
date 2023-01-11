package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubjectTypesUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public SubjectTypesUserLink events;
    public SubjectTypesUser withEvents(SubjectTypesUserLink events) {
        this.events = events;
        return this;
    }
}