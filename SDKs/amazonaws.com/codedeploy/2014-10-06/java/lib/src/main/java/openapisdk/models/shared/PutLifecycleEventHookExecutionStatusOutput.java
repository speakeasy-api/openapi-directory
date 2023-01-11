package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutLifecycleEventHookExecutionStatusOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleEventHookExecutionId")
    public String lifecycleEventHookExecutionId;
    public PutLifecycleEventHookExecutionStatusOutput withLifecycleEventHookExecutionId(String lifecycleEventHookExecutionId) {
        this.lifecycleEventHookExecutionId = lifecycleEventHookExecutionId;
        return this;
    }
}