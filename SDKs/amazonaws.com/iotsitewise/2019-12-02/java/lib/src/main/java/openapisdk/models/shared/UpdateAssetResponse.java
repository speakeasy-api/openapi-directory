package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAssetResponse {
    @JsonProperty("assetStatus")
    public AssetStatus assetStatus;
    public UpdateAssetResponse withAssetStatus(AssetStatus assetStatus) {
        this.assetStatus = assetStatus;
        return this;
    }
}