package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateQualificationFromWorkerRequest {
    @JsonProperty("QualificationTypeId")
    public String qualificationTypeId;
    public DisassociateQualificationFromWorkerRequest withQualificationTypeId(String qualificationTypeId) {
        this.qualificationTypeId = qualificationTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public String reason;
    public DisassociateQualificationFromWorkerRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("WorkerId")
    public String workerId;
    public DisassociateQualificationFromWorkerRequest withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}