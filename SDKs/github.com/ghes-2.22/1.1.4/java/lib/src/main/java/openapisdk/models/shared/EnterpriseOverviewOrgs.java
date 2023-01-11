package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverviewOrgs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled_orgs")
    public Long disabledOrgs;
    public EnterpriseOverviewOrgs withDisabledOrgs(Long disabledOrgs) {
        this.disabledOrgs = disabledOrgs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_orgs")
    public Long totalOrgs;
    public EnterpriseOverviewOrgs withTotalOrgs(Long totalOrgs) {
        this.totalOrgs = totalOrgs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_team_members")
    public Long totalTeamMembers;
    public EnterpriseOverviewOrgs withTotalTeamMembers(Long totalTeamMembers) {
        this.totalTeamMembers = totalTeamMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_teams")
    public Long totalTeams;
    public EnterpriseOverviewOrgs withTotalTeams(Long totalTeams) {
        this.totalTeams = totalTeams;
        return this;
    }
}