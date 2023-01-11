package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssetsResponse {
    @JsonProperty("assetSummaries")
    public AssetSummary[] assetSummaries;
    public ListAssetsResponse withAssetSummaries(AssetSummary[] assetSummaries) {
        this.assetSummaries = assetSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}