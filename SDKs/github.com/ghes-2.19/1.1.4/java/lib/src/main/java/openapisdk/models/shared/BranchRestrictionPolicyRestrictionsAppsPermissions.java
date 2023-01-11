package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BranchRestrictionPolicyRestrictionsAppsPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String contents;
    public BranchRestrictionPolicyRestrictionsAppsPermissions withContents(String contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public String issues;
    public BranchRestrictionPolicyRestrictionsAppsPermissions withIssues(String issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public String metadata;
    public BranchRestrictionPolicyRestrictionsAppsPermissions withMetadata(String metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("single_file")
    public String singleFile;
    public BranchRestrictionPolicyRestrictionsAppsPermissions withSingleFile(String singleFile) {
        this.singleFile = singleFile;
        return this;
    }
}