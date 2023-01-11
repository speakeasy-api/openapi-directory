package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CodeScanningUpdateAlertRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissed_reason")
    public String dismissedReason;
    public CodeScanningUpdateAlertRequestBody withDismissedReason(String dismissedReason) {
        this.dismissedReason = dismissedReason;
        return this;
    }
    @JsonProperty("state")
    public openapisdk.models.shared.CodeScanningAlertSetStateEnum state;
    public CodeScanningUpdateAlertRequestBody withState(openapisdk.models.shared.CodeScanningAlertSetStateEnum state) {
        this.state = state;
        return this;
    }
}