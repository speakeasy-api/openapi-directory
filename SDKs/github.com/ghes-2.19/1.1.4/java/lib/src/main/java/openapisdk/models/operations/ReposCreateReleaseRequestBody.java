package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateReleaseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public ReposCreateReleaseRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("draft")
    public Boolean draft;
    public ReposCreateReleaseRequestBody withDraft(Boolean draft) {
        this.draft = draft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReposCreateReleaseRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prerelease")
    public Boolean prerelease;
    public ReposCreateReleaseRequestBody withPrerelease(Boolean prerelease) {
        this.prerelease = prerelease;
        return this;
    }
    @JsonProperty("tag_name")
    public String tagName;
    public ReposCreateReleaseRequestBody withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_commitish")
    public String targetCommitish;
    public ReposCreateReleaseRequestBody withTargetCommitish(String targetCommitish) {
        this.targetCommitish = targetCommitish;
        return this;
    }
}