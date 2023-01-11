package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverviewIssues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_issues")
    public Long closedIssues;
    public EnterpriseOverviewIssues withClosedIssues(Long closedIssues) {
        this.closedIssues = closedIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("open_issues")
    public Long openIssues;
    public EnterpriseOverviewIssues withOpenIssues(Long openIssues) {
        this.openIssues = openIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_issues")
    public Long totalIssues;
    public EnterpriseOverviewIssues withTotalIssues(Long totalIssues) {
        this.totalIssues = totalIssues;
        return this;
    }
}