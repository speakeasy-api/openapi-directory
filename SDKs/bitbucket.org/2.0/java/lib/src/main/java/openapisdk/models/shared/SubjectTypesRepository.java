package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubjectTypesRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public SubjectTypesRepositoryLink events;
    public SubjectTypesRepository withEvents(SubjectTypesRepositoryLink events) {
        this.events = events;
        return this;
    }
}