package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLifecycleConfigurationRequestBody {
    @JsonProperty("LifecyclePolicies")
    public openapisdk.models.shared.LifecyclePolicy[] lifecyclePolicies;
    public PutLifecycleConfigurationRequestBody withLifecyclePolicies(openapisdk.models.shared.LifecyclePolicy[] lifecyclePolicies) {
        this.lifecyclePolicies = lifecyclePolicies;
        return this;
    }
}