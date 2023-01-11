package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeterUsageResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MeteringRecordId")
    public String meteringRecordId;
    public MeterUsageResult withMeteringRecordId(String meteringRecordId) {
        this.meteringRecordId = meteringRecordId;
        return this;
    }
}