package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommitCommit {
    @JsonProperty("author")
    public CommitCommitGitUser author;
    public CommitCommit withAuthor(CommitCommitGitUser author) {
        this.author = author;
        return this;
    }
    @JsonProperty("comment_count")
    public Long commentCount;
    public CommitCommit withCommentCount(Long commentCount) {
        this.commentCount = commentCount;
        return this;
    }
    @JsonProperty("committer")
    public CommitCommitGitUser committer;
    public CommitCommit withCommitter(CommitCommitGitUser committer) {
        this.committer = committer;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public CommitCommit withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("tree")
    public CommitCommitTree tree;
    public CommitCommit withTree(CommitCommitTree tree) {
        this.tree = tree;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CommitCommit withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification")
    public Verification verification;
    public CommitCommit withVerification(Verification verification) {
        this.verification = verification;
        return this;
    }
}