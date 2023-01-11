package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProvisionProductOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordDetail")
    public RecordDetail recordDetail;
    public ProvisionProductOutput withRecordDetail(RecordDetail recordDetail) {
        this.recordDetail = recordDetail;
        return this;
    }
}