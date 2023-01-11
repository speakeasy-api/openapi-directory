package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifeCycleLastCutoverFinalized
 * Lifecycle Cutover finalized
**/
public class LifeCycleLastCutoverFinalized {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiCallDateTime")
    public String apiCallDateTime;
    public LifeCycleLastCutoverFinalized withApiCallDateTime(String apiCallDateTime) {
        this.apiCallDateTime = apiCallDateTime;
        return this;
    }
}