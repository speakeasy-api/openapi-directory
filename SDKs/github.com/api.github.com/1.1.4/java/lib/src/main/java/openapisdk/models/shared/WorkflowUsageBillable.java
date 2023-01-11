package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WorkflowUsageBillable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MACOS")
    public WorkflowUsageBillableMacos macos;
    public WorkflowUsageBillable withMacos(WorkflowUsageBillableMacos macos) {
        this.macos = macos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UBUNTU")
    public WorkflowUsageBillableUbuntu ubuntu;
    public WorkflowUsageBillable withUbuntu(WorkflowUsageBillableUbuntu ubuntu) {
        this.ubuntu = ubuntu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WINDOWS")
    public WorkflowUsageBillableWindows windows;
    public WorkflowUsageBillable withWindows(WorkflowUsageBillableWindows windows) {
        this.windows = windows;
        return this;
    }
}