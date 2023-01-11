package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21kubernetes1registryPostRequestBodyContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster_uuids")
    public String[] clusterUuids;
    public Onev21kubernetes1registryPostRequestBodyContentApplication1jsonSchema withClusterUuids(String[] clusterUuids) {
        this.clusterUuids = clusterUuids;
        return this;
    }
}