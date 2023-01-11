package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAssetModelResponse {
    @JsonProperty("assetModelStatus")
    public AssetModelStatus assetModelStatus;
    public UpdateAssetModelResponse withAssetModelStatus(AssetModelStatus assetModelStatus) {
        this.assetModelStatus = assetModelStatus;
        return this;
    }
}