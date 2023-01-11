package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProjectAssetsResponse {
    @JsonProperty("assetIds")
    public String[] assetIds;
    public ListProjectAssetsResponse withAssetIds(String[] assetIds) {
        this.assetIds = assetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListProjectAssetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}