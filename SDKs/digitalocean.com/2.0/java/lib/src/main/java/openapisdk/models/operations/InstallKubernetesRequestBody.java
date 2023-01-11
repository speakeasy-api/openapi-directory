package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InstallKubernetesRequestBody {
    @JsonProperty("addon_slugs")
    public String[] addonSlugs;
    public InstallKubernetesRequestBody withAddonSlugs(String[] addonSlugs) {
        this.addonSlugs = addonSlugs;
        return this;
    }
    @JsonProperty("cluster_uuid")
    public String clusterUuid;
    public InstallKubernetesRequestBody withClusterUuid(String clusterUuid) {
        this.clusterUuid = clusterUuid;
        return this;
    }
}