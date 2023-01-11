package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportUsageBatchResponse
 * Specifies the response from the Batch Usages endpoint.
**/
public class ReportUsageBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_assets")
    public String[] invalidAssets;
    public ReportUsageBatchResponse withInvalidAssets(String[] invalidAssets) {
        this.invalidAssets = invalidAssets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_asset_usages_processed")
    public Integer totalAssetUsagesProcessed;
    public ReportUsageBatchResponse withTotalAssetUsagesProcessed(Integer totalAssetUsagesProcessed) {
        this.totalAssetUsagesProcessed = totalAssetUsagesProcessed;
        return this;
    }
}