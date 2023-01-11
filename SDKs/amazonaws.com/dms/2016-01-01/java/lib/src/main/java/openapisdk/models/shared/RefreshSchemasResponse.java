package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RefreshSchemasResponse
 * <p/>
**/
public class RefreshSchemasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshSchemasStatus")
    public RefreshSchemasStatus refreshSchemasStatus;
    public RefreshSchemasResponse withRefreshSchemasStatus(RefreshSchemasStatus refreshSchemasStatus) {
        this.refreshSchemasStatus = refreshSchemasStatus;
        return this;
    }
}