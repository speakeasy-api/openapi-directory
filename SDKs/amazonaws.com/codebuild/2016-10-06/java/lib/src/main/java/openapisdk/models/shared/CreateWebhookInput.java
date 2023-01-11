package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWebhookInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchFilter")
    public String branchFilter;
    public CreateWebhookInput withBranchFilter(String branchFilter) {
        this.branchFilter = branchFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildType")
    public WebhookBuildTypeEnum buildType;
    public CreateWebhookInput withBuildType(WebhookBuildTypeEnum buildType) {
        this.buildType = buildType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterGroups")
    public WebhookFilter[][] filterGroups;
    public CreateWebhookInput withFilterGroups(WebhookFilter[][] filterGroups) {
        this.filterGroups = filterGroups;
        return this;
    }
    @JsonProperty("projectName")
    public String projectName;
    public CreateWebhookInput withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}