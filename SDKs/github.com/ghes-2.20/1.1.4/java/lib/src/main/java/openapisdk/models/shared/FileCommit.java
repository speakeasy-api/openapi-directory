package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FileCommit
 * File Commit
**/
public class FileCommit {
    @JsonProperty("commit")
    public FileCommitCommit commit;
    public FileCommit withCommit(FileCommitCommit commit) {
        this.commit = commit;
        return this;
    }
    @JsonProperty("content")
    public FileCommitContent content;
    public FileCommit withContent(FileCommitContent content) {
        this.content = content;
        return this;
    }
}