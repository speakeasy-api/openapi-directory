package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAvailableUpgrades200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_upgrade_versions")
    public GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions[] availableUpgradeVersions;
    public GetAvailableUpgrades200ApplicationJson withAvailableUpgradeVersions(GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions[] availableUpgradeVersions) {
        this.availableUpgradeVersions = availableUpgradeVersions;
        return this;
    }
}