package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TaskResponse
 * The *task* is the basic object around which many operations in Asana are centered.
**/
public class TaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_status")
    public TaskResponseApprovalStatusEnum approvalStatus;
    public TaskResponse withApprovalStatus(TaskResponseApprovalStatusEnum approvalStatus) {
        this.approvalStatus = approvalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public TaskResponseAssignee assignee;
    public TaskResponse withAssignee(TaskResponseAssignee assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee_section")
    public TaskResponseAssigneeSection assigneeSection;
    public TaskResponse withAssigneeSection(TaskResponseAssigneeSection assigneeSection) {
        this.assigneeSection = assigneeSection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee_status")
    public TaskResponseAssigneeStatusEnum assigneeStatus;
    public TaskResponse withAssigneeStatus(TaskResponseAssigneeStatusEnum assigneeStatus) {
        this.assigneeStatus = assigneeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completed")
    public Boolean completed;
    public TaskResponse withCompleted(Boolean completed) {
        this.completed = completed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completed_at")
    public OffsetDateTime completedAt;
    public TaskResponse withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completed_by")
    public UserCompact completedBy;
    public TaskResponse withCompletedBy(UserCompact completedBy) {
        this.completedBy = completedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public TaskResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public CustomFieldResponse[] customFields;
    public TaskResponse withCustomFields(CustomFieldResponse[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependencies")
    public AsanaResource[] dependencies;
    public TaskResponse withDependencies(AsanaResource[] dependencies) {
        this.dependencies = dependencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependents")
    public AsanaResource[] dependents;
    public TaskResponse withDependents(AsanaResource[] dependents) {
        this.dependents = dependents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_at")
    public LocalDate dueAt;
    public TaskResponse withDueAt(LocalDate dueAt) {
        this.dueAt = dueAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_on")
    public LocalDate dueOn;
    public TaskResponse withDueOn(LocalDate dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external")
    public TaskResponseExternal external;
    public TaskResponse withExternal(TaskResponseExternal external) {
        this.external = external;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public UserCompact[] followers;
    public TaskResponse withFollowers(UserCompact[] followers) {
        this.followers = followers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TaskResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearted")
    public Boolean hearted;
    public TaskResponse withHearted(Boolean hearted) {
        this.hearted = hearted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearts")
    public Like[] hearts;
    public TaskResponse withHearts(Like[] hearts) {
        this.hearts = hearts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_notes")
    public String htmlNotes;
    public TaskResponse withHtmlNotes(String htmlNotes) {
        this.htmlNotes = htmlNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_rendered_as_separator")
    public Boolean isRenderedAsSeparator;
    public TaskResponse withIsRenderedAsSeparator(Boolean isRenderedAsSeparator) {
        this.isRenderedAsSeparator = isRenderedAsSeparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liked")
    public Boolean liked;
    public TaskResponse withLiked(Boolean liked) {
        this.liked = liked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likes")
    public Like[] likes;
    public TaskResponse withLikes(Like[] likes) {
        this.likes = likes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public TaskResponseMemberships[] memberships;
    public TaskResponse withMemberships(TaskResponseMemberships[] memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modified_at")
    public OffsetDateTime modifiedAt;
    public TaskResponse withModifiedAt(OffsetDateTime modifiedAt) {
        this.modifiedAt = modifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TaskResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public TaskResponse withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_hearts")
    public Long numHearts;
    public TaskResponse withNumHearts(Long numHearts) {
        this.numHearts = numHearts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_likes")
    public Long numLikes;
    public TaskResponse withNumLikes(Long numLikes) {
        this.numLikes = numLikes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_subtasks")
    public Long numSubtasks;
    public TaskResponse withNumSubtasks(Long numSubtasks) {
        this.numSubtasks = numSubtasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public TaskResponseParent parent;
    public TaskResponse withParent(TaskResponseParent parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public TaskResponse withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projects")
    public ProjectCompact[] projects;
    public TaskResponse withProjects(ProjectCompact[] projects) {
        this.projects = projects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public TaskResponseResourceSubtypeEnum resourceSubtype;
    public TaskResponse withResourceSubtype(TaskResponseResourceSubtypeEnum resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TaskResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_on")
    public LocalDate startOn;
    public TaskResponse withStartOn(LocalDate startOn) {
        this.startOn = startOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public TagCompact[] tags;
    public TaskResponse withTags(TagCompact[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public TaskResponseWorkspace workspace;
    public TaskResponse withWorkspace(TaskResponseWorkspace workspace) {
        this.workspace = workspace;
        return this;
    }
}