package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetes_version")
    public String kubernetesVersion;
    public GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions withKubernetesVersion(String kubernetesVersion) {
        this.kubernetesVersion = kubernetesVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}