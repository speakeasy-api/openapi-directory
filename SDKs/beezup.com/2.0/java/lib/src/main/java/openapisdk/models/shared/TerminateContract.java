package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TerminateContract
 * The contract termination info
**/
public class TerminateContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractTerminationReason")
    public String contractTerminationReason;
    public TerminateContract withContractTerminationReason(String contractTerminationReason) {
        this.contractTerminationReason = contractTerminationReason;
        return this;
    }
    @JsonProperty("contractTerminationReasonType")
    public Integer contractTerminationReasonType;
    public TerminateContract withContractTerminationReasonType(Integer contractTerminationReasonType) {
        this.contractTerminationReasonType = contractTerminationReasonType;
        return this;
    }
}