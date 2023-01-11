package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuildBatchFilter
 * Specifies filters when retrieving batch builds.
**/
public class BuildBatchFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StatusTypeEnum status;
    public BuildBatchFilter withStatus(StatusTypeEnum status) {
        this.status = status;
        return this;
    }
}