package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateFindingsRequestBodyWorkflow
 * Used to update information about the investigation into the finding.
**/
public class BatchUpdateFindingsRequestBodyWorkflow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public openapisdk.models.shared.WorkflowStatusEnum status;
    public BatchUpdateFindingsRequestBodyWorkflow withStatus(openapisdk.models.shared.WorkflowStatusEnum status) {
        this.status = status;
        return this;
    }
}