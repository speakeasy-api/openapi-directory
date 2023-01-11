package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchAssociateProjectAssetsRequestBody {
    @JsonProperty("assetIds")
    public String[] assetIds;
    public BatchAssociateProjectAssetsRequestBody withAssetIds(String[] assetIds) {
        this.assetIds = assetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public BatchAssociateProjectAssetsRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}