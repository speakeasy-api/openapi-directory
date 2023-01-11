package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RejectQualificationRequestRequest {
    @JsonProperty("QualificationRequestId")
    public String qualificationRequestId;
    public RejectQualificationRequestRequest withQualificationRequestId(String qualificationRequestId) {
        this.qualificationRequestId = qualificationRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public String reason;
    public RejectQualificationRequestRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
}