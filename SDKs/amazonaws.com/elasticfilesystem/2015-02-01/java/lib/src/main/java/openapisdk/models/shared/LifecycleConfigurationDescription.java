package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LifecycleConfigurationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LifecyclePolicies")
    public LifecyclePolicy[] lifecyclePolicies;
    public LifecycleConfigurationDescription withLifecyclePolicies(LifecyclePolicy[] lifecyclePolicies) {
        this.lifecyclePolicies = lifecyclePolicies;
        return this;
    }
}