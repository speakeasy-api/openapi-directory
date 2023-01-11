package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FlinkRunConfiguration
 * Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
**/
public class FlinkRunConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowNonRestoredState")
    public Boolean allowNonRestoredState;
    public FlinkRunConfiguration withAllowNonRestoredState(Boolean allowNonRestoredState) {
        this.allowNonRestoredState = allowNonRestoredState;
        return this;
    }
}