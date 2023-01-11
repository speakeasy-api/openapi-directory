package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposDeleteFileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public ReposDeleteFileRequestBodyAuthor author;
    public ReposDeleteFileRequestBody withAuthor(ReposDeleteFileRequestBodyAuthor author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branch")
    public String branch;
    public ReposDeleteFileRequestBody withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committer")
    public ReposDeleteFileRequestBodyCommitter committer;
    public ReposDeleteFileRequestBody withCommitter(ReposDeleteFileRequestBodyCommitter committer) {
        this.committer = committer;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ReposDeleteFileRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public ReposDeleteFileRequestBody withSha(String sha) {
        this.sha = sha;
        return this;
    }
}