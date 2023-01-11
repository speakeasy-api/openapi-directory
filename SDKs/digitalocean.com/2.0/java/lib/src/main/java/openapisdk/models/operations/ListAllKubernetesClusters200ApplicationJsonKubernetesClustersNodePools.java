package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_scale")
    public Boolean autoScale;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withAutoScale(Boolean autoScale) {
        this.autoScale = autoScale;
        return this;
    }
    @JsonProperty("count")
    public Long count;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_nodes")
    public Long maxNodes;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withMaxNodes(Long maxNodes) {
        this.maxNodes = maxNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min_nodes")
    public Long minNodes;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withMinNodes(Long minNodes) {
        this.minNodes = minNodes;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodes")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes[] nodes;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withNodes(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes[] nodes) {
        this.nodes = nodes;
        return this;
    }
    @JsonProperty("size")
    public String size;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taints")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints[] taints;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools withTaints(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints[] taints) {
        this.taints = taints;
        return this;
    }
}