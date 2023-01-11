package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * WorkspaceSummary
 * Represents a summary of the properties of a workspace.
**/
public class WorkspaceSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public WorkspaceSummary withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonProperty("arn")
    public String arn;
    public WorkspaceSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public WorkspaceSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("status")
    public WorkspaceStatus status;
    public WorkspaceSummary withStatus(WorkspaceStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public WorkspaceSummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("workspaceId")
    public String workspaceId;
    public WorkspaceSummary withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}