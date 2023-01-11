package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Task
 * Task object encapsulating task information.
**/
public class Task {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProgressPercent")
    public Long progressPercent;
    public Task withProgressPercent(Long progressPercent) {
        this.progressPercent = progressPercent;
        return this;
    }
    @JsonProperty("Status")
    public StatusEnum status;
    public Task withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusDetail")
    public String statusDetail;
    public Task withStatusDetail(String statusDetail) {
        this.statusDetail = statusDetail;
        return this;
    }
}