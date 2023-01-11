package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateKubernetesNodePoolRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_scale")
    public Boolean autoScale;
    public UpdateKubernetesNodePoolRequestBodyInput withAutoScale(Boolean autoScale) {
        this.autoScale = autoScale;
        return this;
    }
    @JsonProperty("count")
    public Long count;
    public UpdateKubernetesNodePoolRequestBodyInput withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public UpdateKubernetesNodePoolRequestBodyInput withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_nodes")
    public Long maxNodes;
    public UpdateKubernetesNodePoolRequestBodyInput withMaxNodes(Long maxNodes) {
        this.maxNodes = maxNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min_nodes")
    public Long minNodes;
    public UpdateKubernetesNodePoolRequestBodyInput withMinNodes(Long minNodes) {
        this.minNodes = minNodes;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateKubernetesNodePoolRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public UpdateKubernetesNodePoolRequestBodyInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taints")
    public UpdateKubernetesNodePoolRequestBodyTaints[] taints;
    public UpdateKubernetesNodePoolRequestBodyInput withTaints(UpdateKubernetesNodePoolRequestBodyTaints[] taints) {
        this.taints = taints;
        return this;
    }
}