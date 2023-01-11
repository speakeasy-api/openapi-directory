package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifeCycleLastCutoverReverted
 * Lifecycle last Cutover reverted.
**/
public class LifeCycleLastCutoverReverted {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiCallDateTime")
    public String apiCallDateTime;
    public LifeCycleLastCutoverReverted withApiCallDateTime(String apiCallDateTime) {
        this.apiCallDateTime = apiCallDateTime;
        return this;
    }
}