package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateKubernetesNodePoolRequestBodyTaints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effect")
    public UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum effect;
    public UpdateKubernetesNodePoolRequestBodyTaints withEffect(UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public UpdateKubernetesNodePoolRequestBodyTaints withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public UpdateKubernetesNodePoolRequestBodyTaints withValue(String value) {
        this.value = value;
        return this;
    }
}