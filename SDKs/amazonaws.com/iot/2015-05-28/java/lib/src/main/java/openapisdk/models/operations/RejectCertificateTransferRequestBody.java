package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RejectCertificateTransferRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rejectReason")
    public String rejectReason;
    public RejectCertificateTransferRequestBody withRejectReason(String rejectReason) {
        this.rejectReason = rejectReason;
        return this;
    }
}