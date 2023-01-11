package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAssetModelResponse {
    @JsonProperty("assetModelArn")
    public String assetModelArn;
    public CreateAssetModelResponse withAssetModelArn(String assetModelArn) {
        this.assetModelArn = assetModelArn;
        return this;
    }
    @JsonProperty("assetModelId")
    public String assetModelId;
    public CreateAssetModelResponse withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
    @JsonProperty("assetModelStatus")
    public AssetModelStatus assetModelStatus;
    public CreateAssetModelResponse withAssetModelStatus(AssetModelStatus assetModelStatus) {
        this.assetModelStatus = assetModelStatus;
        return this;
    }
}