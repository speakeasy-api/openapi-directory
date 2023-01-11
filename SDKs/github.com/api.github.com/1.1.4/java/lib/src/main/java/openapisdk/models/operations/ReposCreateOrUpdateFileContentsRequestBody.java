package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateOrUpdateFileContentsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public ReposCreateOrUpdateFileContentsRequestBodyAuthor author;
    public ReposCreateOrUpdateFileContentsRequestBody withAuthor(ReposCreateOrUpdateFileContentsRequestBodyAuthor author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branch")
    public String branch;
    public ReposCreateOrUpdateFileContentsRequestBody withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committer")
    public ReposCreateOrUpdateFileContentsRequestBodyCommitter committer;
    public ReposCreateOrUpdateFileContentsRequestBody withCommitter(ReposCreateOrUpdateFileContentsRequestBodyCommitter committer) {
        this.committer = committer;
        return this;
    }
    @JsonProperty("content")
    public String content;
    public ReposCreateOrUpdateFileContentsRequestBody withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ReposCreateOrUpdateFileContentsRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha")
    public String sha;
    public ReposCreateOrUpdateFileContentsRequestBody withSha(String sha) {
        this.sha = sha;
        return this;
    }
}