package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ImportRead withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("status")
    public ImportReadStatusEnum status;
    public ImportRead withStatus(ImportReadStatusEnum status) {
        this.status = status;
        return this;
    }
}