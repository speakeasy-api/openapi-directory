package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAssetPropertyValueHistoryResponse {
    @JsonProperty("assetPropertyValueHistory")
    public AssetPropertyValue[] assetPropertyValueHistory;
    public GetAssetPropertyValueHistoryResponse withAssetPropertyValueHistory(AssetPropertyValue[] assetPropertyValueHistory) {
        this.assetPropertyValueHistory = assetPropertyValueHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetAssetPropertyValueHistoryResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}