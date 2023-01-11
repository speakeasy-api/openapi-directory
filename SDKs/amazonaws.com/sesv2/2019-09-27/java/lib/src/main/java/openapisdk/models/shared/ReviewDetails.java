package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReviewDetails
 * An object that contains information about your account details review.
**/
public class ReviewDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CaseId")
    public String caseId;
    public ReviewDetails withCaseId(String caseId) {
        this.caseId = caseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ReviewStatusEnum status;
    public ReviewDetails withStatus(ReviewStatusEnum status) {
        this.status = status;
        return this;
    }
}