package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWebhookInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchFilter")
    public String branchFilter;
    public UpdateWebhookInput withBranchFilter(String branchFilter) {
        this.branchFilter = branchFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildType")
    public WebhookBuildTypeEnum buildType;
    public UpdateWebhookInput withBuildType(WebhookBuildTypeEnum buildType) {
        this.buildType = buildType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterGroups")
    public WebhookFilter[][] filterGroups;
    public UpdateWebhookInput withFilterGroups(WebhookFilter[][] filterGroups) {
        this.filterGroups = filterGroups;
        return this;
    }
    @JsonProperty("projectName")
    public String projectName;
    public UpdateWebhookInput withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotateSecret")
    public Boolean rotateSecret;
    public UpdateWebhookInput withRotateSecret(Boolean rotateSecret) {
        this.rotateSecret = rotateSecret;
        return this;
    }
}