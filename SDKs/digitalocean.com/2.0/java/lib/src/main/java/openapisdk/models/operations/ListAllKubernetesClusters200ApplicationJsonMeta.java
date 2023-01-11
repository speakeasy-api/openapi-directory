package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllKubernetesClusters200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAllKubernetesClusters200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAllKubernetesClusters200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}