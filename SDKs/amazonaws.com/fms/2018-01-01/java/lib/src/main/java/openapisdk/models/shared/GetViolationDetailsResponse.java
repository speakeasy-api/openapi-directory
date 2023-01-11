package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetViolationDetailsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationDetail")
    public ViolationDetail violationDetail;
    public GetViolationDetailsResponse withViolationDetail(ViolationDetail violationDetail) {
        this.violationDetail = violationDetail;
        return this;
    }
}