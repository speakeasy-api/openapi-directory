package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InstallationGhes2Permissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checks")
    public String checks;
    public InstallationGhes2Permissions withChecks(String checks) {
        this.checks = checks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String contents;
    public InstallationGhes2Permissions withContents(String contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public String deployments;
    public InstallationGhes2Permissions withDeployments(String deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public String issues;
    public InstallationGhes2Permissions withIssues(String issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public String metadata;
    public InstallationGhes2Permissions withMetadata(String metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_administration")
    public String organizationAdministration;
    public InstallationGhes2Permissions withOrganizationAdministration(String organizationAdministration) {
        this.organizationAdministration = organizationAdministration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pull_requests")
    public String pullRequests;
    public InstallationGhes2Permissions withPullRequests(String pullRequests) {
        this.pullRequests = pullRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statuses")
    public String statuses;
    public InstallationGhes2Permissions withStatuses(String statuses) {
        this.statuses = statuses;
        return this;
    }
}