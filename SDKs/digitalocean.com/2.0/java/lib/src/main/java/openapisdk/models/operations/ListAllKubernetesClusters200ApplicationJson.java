package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllKubernetesClusters200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetes_clusters")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters[] kubernetesClusters;
    public ListAllKubernetesClusters200ApplicationJson withKubernetesClusters(ListAllKubernetesClusters200ApplicationJsonKubernetesClusters[] kubernetesClusters) {
        this.kubernetesClusters = kubernetesClusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllKubernetesClusters200ApplicationJsonLinks links;
    public ListAllKubernetesClusters200ApplicationJson withLinks(ListAllKubernetesClusters200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllKubernetesClusters200ApplicationJsonMeta meta;
    public ListAllKubernetesClusters200ApplicationJson withMeta(ListAllKubernetesClusters200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}