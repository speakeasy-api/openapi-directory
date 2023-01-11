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
 * ProjectResponseCurrentStatus
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
**/
public class ProjectResponseCurrentStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public UserCompact author;
    public ProjectResponseCurrentStatus withAuthor(UserCompact author) {
        this.author = author;
        return this;
    }
    @JsonProperty("color")
    public ProjectResponseCurrentStatusColorEnum color;
    public ProjectResponseCurrentStatus withColor(ProjectResponseCurrentStatusColorEnum color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ProjectResponseCurrentStatus withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public UserCompact createdBy;
    public ProjectResponseCurrentStatus withCreatedBy(UserCompact createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public ProjectResponseCurrentStatus withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_text")
    public String htmlText;
    public ProjectResponseCurrentStatus withHtmlText(String htmlText) {
        this.htmlText = htmlText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modified_at")
    public OffsetDateTime modifiedAt;
    public ProjectResponseCurrentStatus withModifiedAt(OffsetDateTime modifiedAt) {
        this.modifiedAt = modifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public ProjectResponseCurrentStatus withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public ProjectResponseCurrentStatus withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ProjectResponseCurrentStatus withTitle(String title) {
        this.title = title;
        return this;
    }
}