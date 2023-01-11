package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverviewMilestones {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_milestones")
    public Long closedMilestones;
    public EnterpriseOverviewMilestones withClosedMilestones(Long closedMilestones) {
        this.closedMilestones = closedMilestones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("open_milestones")
    public Long openMilestones;
    public EnterpriseOverviewMilestones withOpenMilestones(Long openMilestones) {
        this.openMilestones = openMilestones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_milestones")
    public Long totalMilestones;
    public EnterpriseOverviewMilestones withTotalMilestones(Long totalMilestones) {
        this.totalMilestones = totalMilestones;
        return this;
    }
}