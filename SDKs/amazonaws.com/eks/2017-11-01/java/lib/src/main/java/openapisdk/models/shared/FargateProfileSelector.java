package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FargateProfileSelector
 * An object representing an Fargate profile selector.
**/
public class FargateProfileSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public FargateProfileSelector withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public String namespace;
    public FargateProfileSelector withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
}