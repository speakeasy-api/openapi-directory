package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAssignmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Assignment")
    public Assignment assignment;
    public GetAssignmentResponse withAssignment(Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HIT")
    public Hit hit;
    public GetAssignmentResponse withHit(Hit hit) {
        this.hit = hit;
        return this;
    }
}