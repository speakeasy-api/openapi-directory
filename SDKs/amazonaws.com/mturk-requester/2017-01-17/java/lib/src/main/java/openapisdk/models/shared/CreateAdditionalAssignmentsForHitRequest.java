package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAdditionalAssignmentsForHitRequest {
    @JsonProperty("HITId")
    public String hitId;
    public CreateAdditionalAssignmentsForHitRequest withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
    @JsonProperty("NumberOfAdditionalAssignments")
    public Long numberOfAdditionalAssignments;
    public CreateAdditionalAssignmentsForHitRequest withNumberOfAdditionalAssignments(Long numberOfAdditionalAssignments) {
        this.numberOfAdditionalAssignments = numberOfAdditionalAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UniqueRequestToken")
    public String uniqueRequestToken;
    public CreateAdditionalAssignmentsForHitRequest withUniqueRequestToken(String uniqueRequestToken) {
        this.uniqueRequestToken = uniqueRequestToken;
        return this;
    }
}