package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAssetRequestBody {
    @JsonProperty("assetModelId")
    public String assetModelId;
    public CreateAssetRequestBody withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
    @JsonProperty("assetName")
    public String assetName;
    public CreateAssetRequestBody withAssetName(String assetName) {
        this.assetName = assetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateAssetRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateAssetRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}