package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GitCreateCommitRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public GitCreateCommitRequestBodyAuthor author;
    public GitCreateCommitRequestBody withAuthor(GitCreateCommitRequestBodyAuthor author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committer")
    public GitCreateCommitRequestBodyCommitter committer;
    public GitCreateCommitRequestBody withCommitter(GitCreateCommitRequestBodyCommitter committer) {
        this.committer = committer;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GitCreateCommitRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parents")
    public String[] parents;
    public GitCreateCommitRequestBody withParents(String[] parents) {
        this.parents = parents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;
    public GitCreateCommitRequestBody withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @JsonProperty("tree")
    public String tree;
    public GitCreateCommitRequestBody withTree(String tree) {
        this.tree = tree;
        return this;
    }
}