package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkerBlock
 *  The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block. 
**/
public class WorkerBlock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public String reason;
    public WorkerBlock withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerId")
    public String workerId;
    public WorkerBlock withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}