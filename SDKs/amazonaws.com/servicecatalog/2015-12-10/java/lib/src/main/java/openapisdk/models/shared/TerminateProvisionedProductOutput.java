package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TerminateProvisionedProductOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordDetail")
    public RecordDetail recordDetail;
    public TerminateProvisionedProductOutput withRecordDetail(RecordDetail recordDetail) {
        this.recordDetail = recordDetail;
        return this;
    }
}