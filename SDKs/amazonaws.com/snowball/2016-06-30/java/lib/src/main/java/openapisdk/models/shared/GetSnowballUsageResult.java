package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSnowballUsageResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnowballLimit")
    public Long snowballLimit;
    public GetSnowballUsageResult withSnowballLimit(Long snowballLimit) {
        this.snowballLimit = snowballLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnowballsInUse")
    public Long snowballsInUse;
    public GetSnowballUsageResult withSnowballsInUse(Long snowballsInUse) {
        this.snowballsInUse = snowballsInUse;
        return this;
    }
}