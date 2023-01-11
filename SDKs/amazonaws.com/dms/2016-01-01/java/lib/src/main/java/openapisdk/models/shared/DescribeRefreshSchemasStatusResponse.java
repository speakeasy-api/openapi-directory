package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeRefreshSchemasStatusResponse
 * <p/>
**/
public class DescribeRefreshSchemasStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshSchemasStatus")
    public RefreshSchemasStatus refreshSchemasStatus;
    public DescribeRefreshSchemasStatusResponse withRefreshSchemasStatus(RefreshSchemasStatus refreshSchemasStatus) {
        this.refreshSchemasStatus = refreshSchemasStatus;
        return this;
    }
}