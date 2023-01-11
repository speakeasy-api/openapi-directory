package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNodegroupConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public UpdateNodegroupConfigRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public UpdateNodegroupConfigRequestBodyLabels labels;
    public UpdateNodegroupConfigRequestBody withLabels(UpdateNodegroupConfigRequestBodyLabels labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scalingConfig")
    public UpdateNodegroupConfigRequestBodyScalingConfig scalingConfig;
    public UpdateNodegroupConfigRequestBody withScalingConfig(UpdateNodegroupConfigRequestBodyScalingConfig scalingConfig) {
        this.scalingConfig = scalingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taints")
    public UpdateNodegroupConfigRequestBodyTaints taints;
    public UpdateNodegroupConfigRequestBody withTaints(UpdateNodegroupConfigRequestBodyTaints taints) {
        this.taints = taints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateConfig")
    public UpdateNodegroupConfigRequestBodyUpdateConfig updateConfig;
    public UpdateNodegroupConfigRequestBody withUpdateConfig(UpdateNodegroupConfigRequestBodyUpdateConfig updateConfig) {
        this.updateConfig = updateConfig;
        return this;
    }
}