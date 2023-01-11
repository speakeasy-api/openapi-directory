package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssociatedAssetsResponse {
    @JsonProperty("assetSummaries")
    public AssociatedAssetsSummary[] assetSummaries;
    public ListAssociatedAssetsResponse withAssetSummaries(AssociatedAssetsSummary[] assetSummaries) {
        this.assetSummaries = assetSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssociatedAssetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}