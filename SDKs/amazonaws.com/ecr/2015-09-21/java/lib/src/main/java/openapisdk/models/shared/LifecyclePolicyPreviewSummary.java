package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifecyclePolicyPreviewSummary
 * The summary of the lifecycle policy preview request.
**/
public class LifecyclePolicyPreviewSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiringImageTotalCount")
    public Long expiringImageTotalCount;
    public LifecyclePolicyPreviewSummary withExpiringImageTotalCount(Long expiringImageTotalCount) {
        this.expiringImageTotalCount = expiringImageTotalCount;
        return this;
    }
}