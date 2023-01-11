package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecordResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Record")
    public FeatureValue[] record;
    public GetRecordResponse withRecord(FeatureValue[] record) {
        this.record = record;
        return this;
    }
}