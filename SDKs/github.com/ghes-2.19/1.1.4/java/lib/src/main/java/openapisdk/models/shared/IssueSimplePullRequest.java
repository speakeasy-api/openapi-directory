package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class IssueSimplePullRequest {
    @JsonProperty("diff_url")
    public String diffUrl;
    public IssueSimplePullRequest withDiffUrl(String diffUrl) {
        this.diffUrl = diffUrl;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public IssueSimplePullRequest withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("merged_at")
    public OffsetDateTime mergedAt;
    public IssueSimplePullRequest withMergedAt(OffsetDateTime mergedAt) {
        this.mergedAt = mergedAt;
        return this;
    }
    @JsonProperty("patch_url")
    public String patchUrl;
    public IssueSimplePullRequest withPatchUrl(String patchUrl) {
        this.patchUrl = patchUrl;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public IssueSimplePullRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}