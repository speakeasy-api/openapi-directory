package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutRecordRequestBody {
    @JsonProperty("Record")
    public openapisdk.models.shared.FeatureValue[] record;
    public PutRecordRequestBody withRecord(openapisdk.models.shared.FeatureValue[] record) {
        this.record = record;
        return this;
    }
}