package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommitSearchResultItemCommit {
    @JsonProperty("author")
    public CommitSearchResultItemCommitAuthor author;
    public CommitSearchResultItemCommit withAuthor(CommitSearchResultItemCommitAuthor author) {
        this.author = author;
        return this;
    }
    @JsonProperty("comment_count")
    public Long commentCount;
    public CommitSearchResultItemCommit withCommentCount(Long commentCount) {
        this.commentCount = commentCount;
        return this;
    }
    @JsonProperty("committer")
    public CommitSearchResultItemCommitGitUser committer;
    public CommitSearchResultItemCommit withCommitter(CommitSearchResultItemCommitGitUser committer) {
        this.committer = committer;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public CommitSearchResultItemCommit withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("tree")
    public CommitSearchResultItemCommitTree tree;
    public CommitSearchResultItemCommit withTree(CommitSearchResultItemCommitTree tree) {
        this.tree = tree;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CommitSearchResultItemCommit withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification")
    public Verification verification;
    public CommitSearchResultItemCommit withVerification(Verification verification) {
        this.verification = verification;
        return this;
    }
}