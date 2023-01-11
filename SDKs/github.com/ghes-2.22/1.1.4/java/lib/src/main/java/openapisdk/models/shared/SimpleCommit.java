package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SimpleCommit
 * Simple Commit
**/
public class SimpleCommit {
    @JsonProperty("author")
    public SimpleCommitAuthor author;
    public SimpleCommit withAuthor(SimpleCommitAuthor author) {
        this.author = author;
        return this;
    }
    @JsonProperty("committer")
    public SimpleCommitCommitter committer;
    public SimpleCommit withCommitter(SimpleCommitCommitter committer) {
        this.committer = committer;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public SimpleCommit withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public SimpleCommit withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public SimpleCommit withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("tree_id")
    public String treeId;
    public SimpleCommit withTreeId(String treeId) {
        this.treeId = treeId;
        return this;
    }
}