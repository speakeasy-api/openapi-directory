package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_scale")
    public Boolean autoScale;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput withAutoScale(Boolean autoScale) {
        this.autoScale = autoScale;
        return this;
    }
    @JsonProperty("count")
    public Long count;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_nodes")
    public Long maxNodes;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput withMaxNodes(Long maxNodes) {
        this.maxNodes = maxNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min_nodes")
    public Long minNodes;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput withMinNodes(Long minNodes) {
        this.minNodes = minNodes;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("size")
    public String size;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taints")
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints[] taints;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput withTaints(Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints[] taints) {
        this.taints = taints;
        return this;
    }
}