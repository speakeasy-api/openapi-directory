package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WorkflowUsage
 * Workflow Usage
**/
public class WorkflowUsage {
    @JsonProperty("billable")
    public WorkflowUsageBillable billable;
    public WorkflowUsage withBillable(WorkflowUsageBillable billable) {
        this.billable = billable;
        return this;
    }
}