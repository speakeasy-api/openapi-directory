package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssetRequestBody {
    @JsonProperty("assetName")
    public String assetName;
    public UpdateAssetRequestBody withAssetName(String assetName) {
        this.assetName = assetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateAssetRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}