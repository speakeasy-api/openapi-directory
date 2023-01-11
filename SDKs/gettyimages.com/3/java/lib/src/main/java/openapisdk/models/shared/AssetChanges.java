package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssetChanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("change_set_id")
    public String changeSetId;
    public AssetChanges withChangeSetId(String changeSetId) {
        this.changeSetId = changeSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changed_assets")
    public ChangedAssetDetail[] changedAssets;
    public AssetChanges withChangedAssets(ChangedAssetDetail[] changedAssets) {
        this.changedAssets = changedAssets;
        return this;
    }
}