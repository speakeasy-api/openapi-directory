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
 * ProjectResponse
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
**/
public class ProjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public ProjectResponse withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public ProjectResponseColorEnum color;
    public ProjectResponse withColor(ProjectResponseColorEnum color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ProjectResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_status")
    public ProjectResponseCurrentStatus currentStatus;
    public ProjectResponse withCurrentStatus(ProjectResponseCurrentStatus currentStatus) {
        this.currentStatus = currentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_field_settings")
    public CustomFieldSettingCompact[] customFieldSettings;
    public ProjectResponse withCustomFieldSettings(CustomFieldSettingCompact[] customFieldSettings) {
        this.customFieldSettings = customFieldSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public CustomFieldCompact[] customFields;
    public ProjectResponse withCustomFields(CustomFieldCompact[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_view")
    public ProjectResponseDefaultViewEnum defaultView;
    public ProjectResponse withDefaultView(ProjectResponseDefaultViewEnum defaultView) {
        this.defaultView = defaultView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("due_date")
    public OffsetDateTime dueDate;
    public ProjectResponse withDueDate(OffsetDateTime dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("due_on")
    public OffsetDateTime dueOn;
    public ProjectResponse withDueOn(OffsetDateTime dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public UserCompact[] followers;
    public ProjectResponse withFollowers(UserCompact[] followers) {
        this.followers = followers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public ProjectResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_notes")
    public String htmlNotes;
    public ProjectResponse withHtmlNotes(String htmlNotes) {
        this.htmlNotes = htmlNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
    public ProjectResponseIconEnum icon;
    public ProjectResponse withIcon(ProjectResponseIconEnum icon) {
        this.icon = icon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_template")
    public Boolean isTemplate;
    public ProjectResponse withIsTemplate(Boolean isTemplate) {
        this.isTemplate = isTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public UserCompact[] members;
    public ProjectResponse withMembers(UserCompact[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modified_at")
    public OffsetDateTime modifiedAt;
    public ProjectResponse withModifiedAt(OffsetDateTime modifiedAt) {
        this.modifiedAt = modifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProjectResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public ProjectResponse withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public ProjectResponseOwner owner;
    public ProjectResponse withOwner(ProjectResponseOwner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public ProjectResponse withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public ProjectResponse withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public ProjectResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_on")
    public LocalDate startOn;
    public ProjectResponse withStartOn(LocalDate startOn) {
        this.startOn = startOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public ProjectResponseTeam team;
    public ProjectResponse withTeam(ProjectResponseTeam team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public ProjectResponseWorkspace workspace;
    public ProjectResponse withWorkspace(ProjectResponseWorkspace workspace) {
        this.workspace = workspace;
        return this;
    }
}