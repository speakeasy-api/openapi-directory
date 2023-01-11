package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportUsageBatchRequest
 * Specifies the request information for the Batch Usages endpoint.
**/
public class ReportUsageBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_usages")
    public AssetUsage[] assetUsages;
    public ReportUsageBatchRequest withAssetUsages(AssetUsage[] assetUsages) {
        this.assetUsages = assetUsages;
        return this;
    }
}