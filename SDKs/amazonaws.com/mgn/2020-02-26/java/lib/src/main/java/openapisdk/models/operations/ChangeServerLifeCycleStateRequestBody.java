package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChangeServerLifeCycleStateRequestBody {
    @JsonProperty("lifeCycle")
    public ChangeServerLifeCycleStateRequestBodyLifeCycle lifeCycle;
    public ChangeServerLifeCycleStateRequestBody withLifeCycle(ChangeServerLifeCycleStateRequestBodyLifeCycle lifeCycle) {
        this.lifeCycle = lifeCycle;
        return this;
    }
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public ChangeServerLifeCycleStateRequestBody withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
}