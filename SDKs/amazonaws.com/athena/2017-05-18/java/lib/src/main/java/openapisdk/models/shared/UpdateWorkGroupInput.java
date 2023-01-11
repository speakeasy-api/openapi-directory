package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationUpdates")
    public WorkGroupConfigurationUpdates configurationUpdates;
    public UpdateWorkGroupInput withConfigurationUpdates(WorkGroupConfigurationUpdates configurationUpdates) {
        this.configurationUpdates = configurationUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateWorkGroupInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public WorkGroupStateEnum state;
    public UpdateWorkGroupInput withState(WorkGroupStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("WorkGroup")
    public String workGroup;
    public UpdateWorkGroupInput withWorkGroup(String workGroup) {
        this.workGroup = workGroup;
        return this;
    }
}