package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Workflow
 * Provides information about the status of the investigation into a finding.
**/
public class Workflow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public WorkflowStatusEnum status;
    public Workflow withStatus(WorkflowStatusEnum status) {
        this.status = status;
        return this;
    }
}