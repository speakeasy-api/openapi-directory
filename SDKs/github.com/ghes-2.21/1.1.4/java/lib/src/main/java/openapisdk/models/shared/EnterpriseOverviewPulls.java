package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverviewPulls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergeable_pulls")
    public Long mergeablePulls;
    public EnterpriseOverviewPulls withMergeablePulls(Long mergeablePulls) {
        this.mergeablePulls = mergeablePulls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merged_pulls")
    public Long mergedPulls;
    public EnterpriseOverviewPulls withMergedPulls(Long mergedPulls) {
        this.mergedPulls = mergedPulls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_pulls")
    public Long totalPulls;
    public EnterpriseOverviewPulls withTotalPulls(Long totalPulls) {
        this.totalPulls = totalPulls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unmergeable_pulls")
    public Long unmergeablePulls;
    public EnterpriseOverviewPulls withUnmergeablePulls(Long unmergeablePulls) {
        this.unmergeablePulls = unmergeablePulls;
        return this;
    }
}