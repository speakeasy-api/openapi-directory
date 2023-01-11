package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effect")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum effect;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints withEffect(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints withValue(String value) {
        this.value = value;
        return this;
    }
}