package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifecyclePolicyPreviewFilter
 * The filter for the lifecycle policy preview.
**/
public class LifecyclePolicyPreviewFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagStatus")
    public TagStatusEnum tagStatus;
    public LifecyclePolicyPreviewFilter withTagStatus(TagStatusEnum tagStatus) {
        this.tagStatus = tagStatus;
        return this;
    }
}