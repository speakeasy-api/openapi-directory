package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssetModelsResponse {
    @JsonProperty("assetModelSummaries")
    public AssetModelSummary[] assetModelSummaries;
    public ListAssetModelsResponse withAssetModelSummaries(AssetModelSummary[] assetModelSummaries) {
        this.assetModelSummaries = assetModelSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssetModelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}