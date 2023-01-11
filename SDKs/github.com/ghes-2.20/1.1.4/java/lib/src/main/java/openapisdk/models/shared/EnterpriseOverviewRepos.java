package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverviewRepos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fork_repos")
    public Long forkRepos;
    public EnterpriseOverviewRepos withForkRepos(Long forkRepos) {
        this.forkRepos = forkRepos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org_repos")
    public Long orgRepos;
    public EnterpriseOverviewRepos withOrgRepos(Long orgRepos) {
        this.orgRepos = orgRepos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root_repos")
    public Long rootRepos;
    public EnterpriseOverviewRepos withRootRepos(Long rootRepos) {
        this.rootRepos = rootRepos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_pushes")
    public Long totalPushes;
    public EnterpriseOverviewRepos withTotalPushes(Long totalPushes) {
        this.totalPushes = totalPushes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_repos")
    public Long totalRepos;
    public EnterpriseOverviewRepos withTotalRepos(Long totalRepos) {
        this.totalRepos = totalRepos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_wikis")
    public Long totalWikis;
    public EnterpriseOverviewRepos withTotalWikis(Long totalWikis) {
        this.totalWikis = totalWikis;
        return this;
    }
}