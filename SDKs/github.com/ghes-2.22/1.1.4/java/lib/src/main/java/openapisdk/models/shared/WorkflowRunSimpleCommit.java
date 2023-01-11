package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * WorkflowRunSimpleCommit
 * Simple Commit
**/
public class WorkflowRunSimpleCommit {
    @JsonProperty("author")
    public WorkflowRunSimpleCommitAuthor author;
    public WorkflowRunSimpleCommit withAuthor(WorkflowRunSimpleCommitAuthor author) {
        this.author = author;
        return this;
    }
    @JsonProperty("committer")
    public WorkflowRunSimpleCommitCommitter committer;
    public WorkflowRunSimpleCommit withCommitter(WorkflowRunSimpleCommitCommitter committer) {
        this.committer = committer;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public WorkflowRunSimpleCommit withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public WorkflowRunSimpleCommit withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public WorkflowRunSimpleCommit withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("tree_id")
    public String treeId;
    public WorkflowRunSimpleCommit withTreeId(String treeId) {
        this.treeId = treeId;
        return this;
    }
}