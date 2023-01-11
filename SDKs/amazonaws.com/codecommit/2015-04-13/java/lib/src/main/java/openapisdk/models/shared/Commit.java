package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Commit
 * Returns information about a specific commit.
**/
public class Commit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalData")
    public String additionalData;
    public Commit withAdditionalData(String additionalData) {
        this.additionalData = additionalData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public UserInfo author;
    public Commit withAuthor(UserInfo author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitId")
    public String commitId;
    public Commit withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committer")
    public UserInfo committer;
    public Commit withCommitter(UserInfo committer) {
        this.committer = committer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Commit withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parents")
    public String[] parents;
    public Commit withParents(String[] parents) {
        this.parents = parents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treeId")
    public String treeId;
    public Commit withTreeId(String treeId) {
        this.treeId = treeId;
        return this;
    }
}