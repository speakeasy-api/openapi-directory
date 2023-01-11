package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifeCycleLastTestFinalized
 * Lifecycle last Test finlized.
**/
public class LifeCycleLastTestFinalized {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiCallDateTime")
    public String apiCallDateTime;
    public LifeCycleLastTestFinalized withApiCallDateTime(String apiCallDateTime) {
        this.apiCallDateTime = apiCallDateTime;
        return this;
    }
}