package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAssetModelResponse {
    @JsonProperty("assetModelStatus")
    public AssetModelStatus assetModelStatus;
    public DeleteAssetModelResponse withAssetModelStatus(AssetModelStatus assetModelStatus) {
        this.assetModelStatus = assetModelStatus;
        return this;
    }
}