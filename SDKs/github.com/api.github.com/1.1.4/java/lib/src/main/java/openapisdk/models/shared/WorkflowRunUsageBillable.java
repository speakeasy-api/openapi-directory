package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WorkflowRunUsageBillable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MACOS")
    public WorkflowRunUsageBillableMacos macos;
    public WorkflowRunUsageBillable withMacos(WorkflowRunUsageBillableMacos macos) {
        this.macos = macos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UBUNTU")
    public WorkflowRunUsageBillableUbuntu ubuntu;
    public WorkflowRunUsageBillable withUbuntu(WorkflowRunUsageBillableUbuntu ubuntu) {
        this.ubuntu = ubuntu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WINDOWS")
    public WorkflowRunUsageBillableWindows windows;
    public WorkflowRunUsageBillable withWindows(WorkflowRunUsageBillableWindows windows) {
        this.windows = windows;
        return this;
    }
}