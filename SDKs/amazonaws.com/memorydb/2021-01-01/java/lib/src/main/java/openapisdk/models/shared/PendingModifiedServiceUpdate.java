package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PendingModifiedServiceUpdate
 * Update action that has yet to be processed for the corresponding apply/stop request
**/
public class PendingModifiedServiceUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceUpdateName")
    public String serviceUpdateName;
    public PendingModifiedServiceUpdate withServiceUpdateName(String serviceUpdateName) {
        this.serviceUpdateName = serviceUpdateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ServiceUpdateStatusEnum status;
    public PendingModifiedServiceUpdate withStatus(ServiceUpdateStatusEnum status) {
        this.status = status;
        return this;
    }
}