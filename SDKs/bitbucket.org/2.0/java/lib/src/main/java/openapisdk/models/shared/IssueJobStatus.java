package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssueJobStatus
 * The status of an import or export job
**/
public class IssueJobStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public IssueJobStatus withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pct")
    public Double pct;
    public IssueJobStatus withPct(Double pct) {
        this.pct = pct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phase")
    public String phase;
    public IssueJobStatus withPhase(String phase) {
        this.phase = phase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public IssueJobStatusStatusEnum status;
    public IssueJobStatus withStatus(IssueJobStatusStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public IssueJobStatus withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public IssueJobStatus withType(String type) {
        this.type = type;
        return this;
    }
}