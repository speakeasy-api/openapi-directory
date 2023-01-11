package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WorkflowDetails
 * Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution.
**/
public class WorkflowDetails {
    @JsonProperty("OnUpload")
    public WorkflowDetail[] onUpload;
    public WorkflowDetails withOnUpload(WorkflowDetail[] onUpload) {
        this.onUpload = onUpload;
        return this;
    }
}