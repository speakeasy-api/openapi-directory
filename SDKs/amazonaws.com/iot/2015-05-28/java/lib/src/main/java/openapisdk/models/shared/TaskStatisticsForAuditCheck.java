package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskStatisticsForAuditCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canceledFindingsCount")
    public Long canceledFindingsCount;
    public TaskStatisticsForAuditCheck withCanceledFindingsCount(Long canceledFindingsCount) {
        this.canceledFindingsCount = canceledFindingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedFindingsCount")
    public Long failedFindingsCount;
    public TaskStatisticsForAuditCheck withFailedFindingsCount(Long failedFindingsCount) {
        this.failedFindingsCount = failedFindingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippedFindingsCount")
    public Long skippedFindingsCount;
    public TaskStatisticsForAuditCheck withSkippedFindingsCount(Long skippedFindingsCount) {
        this.skippedFindingsCount = skippedFindingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("succeededFindingsCount")
    public Long succeededFindingsCount;
    public TaskStatisticsForAuditCheck withSucceededFindingsCount(Long succeededFindingsCount) {
        this.succeededFindingsCount = succeededFindingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFindingsCount")
    public Long totalFindingsCount;
    public TaskStatisticsForAuditCheck withTotalFindingsCount(Long totalFindingsCount) {
        this.totalFindingsCount = totalFindingsCount;
        return this;
    }
}