package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BoardAsset {
    @JsonProperty("asset_id")
    public String assetId;
    public BoardAsset withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}