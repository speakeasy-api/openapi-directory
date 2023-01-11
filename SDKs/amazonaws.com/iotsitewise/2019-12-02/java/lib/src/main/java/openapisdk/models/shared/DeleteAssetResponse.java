package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAssetResponse {
    @JsonProperty("assetStatus")
    public AssetStatus assetStatus;
    public DeleteAssetResponse withAssetStatus(AssetStatus assetStatus) {
        this.assetStatus = assetStatus;
        return this;
    }
}