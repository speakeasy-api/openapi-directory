package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchResetAlarmResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorEntries")
    public BatchAlarmActionErrorEntry[] errorEntries;
    public BatchResetAlarmResponse withErrorEntries(BatchAlarmActionErrorEntry[] errorEntries) {
        this.errorEntries = errorEntries;
        return this;
    }
}