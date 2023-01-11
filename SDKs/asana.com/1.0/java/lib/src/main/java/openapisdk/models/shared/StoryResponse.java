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
 * StoryResponse
 * A story represents an activity associated with an object in the Asana system.
**/
public class StoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public UserCompact assignee;
    public StoryResponse withAssignee(UserCompact assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public StoryResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public UserCompact createdBy;
    public StoryResponse withCreatedBy(UserCompact createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_field")
    public CustomFieldCompact customField;
    public StoryResponse withCustomField(CustomFieldCompact customField) {
        this.customField = customField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependency")
    public TaskCompact dependency;
    public StoryResponse withDependency(TaskCompact dependency) {
        this.dependency = dependency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicate_of")
    public TaskCompact duplicateOf;
    public StoryResponse withDuplicateOf(TaskCompact duplicateOf) {
        this.duplicateOf = duplicateOf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicated_from")
    public TaskCompact duplicatedFrom;
    public StoryResponse withDuplicatedFrom(TaskCompact duplicatedFrom) {
        this.duplicatedFrom = duplicatedFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("follower")
    public UserCompact follower;
    public StoryResponse withFollower(UserCompact follower) {
        this.follower = follower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public StoryResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearted")
    public Boolean hearted;
    public StoryResponse withHearted(Boolean hearted) {
        this.hearted = hearted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearts")
    public Like[] hearts;
    public StoryResponse withHearts(Like[] hearts) {
        this.hearts = hearts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_text")
    public String htmlText;
    public StoryResponse withHtmlText(String htmlText) {
        this.htmlText = htmlText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_edited")
    public Boolean isEdited;
    public StoryResponse withIsEdited(Boolean isEdited) {
        this.isEdited = isEdited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_pinned")
    public Boolean isPinned;
    public StoryResponse withIsPinned(Boolean isPinned) {
        this.isPinned = isPinned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liked")
    public Boolean liked;
    public StoryResponse withLiked(Boolean liked) {
        this.liked = liked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likes")
    public Like[] likes;
    public StoryResponse withLikes(Like[] likes) {
        this.likes = likes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_approval_status")
    public String newApprovalStatus;
    public StoryResponse withNewApprovalStatus(String newApprovalStatus) {
        this.newApprovalStatus = newApprovalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_dates")
    public StoryResponseDates newDates;
    public StoryResponse withNewDates(StoryResponseDates newDates) {
        this.newDates = newDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_enum_value")
    public EnumOption newEnumValue;
    public StoryResponse withNewEnumValue(EnumOption newEnumValue) {
        this.newEnumValue = newEnumValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_multi_enum_values")
    public EnumOption[] newMultiEnumValues;
    public StoryResponse withNewMultiEnumValues(EnumOption[] newMultiEnumValues) {
        this.newMultiEnumValues = newMultiEnumValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_name")
    public String newName;
    public StoryResponse withNewName(String newName) {
        this.newName = newName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_number_value")
    public Long newNumberValue;
    public StoryResponse withNewNumberValue(Long newNumberValue) {
        this.newNumberValue = newNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_resource_subtype")
    public String newResourceSubtype;
    public StoryResponse withNewResourceSubtype(String newResourceSubtype) {
        this.newResourceSubtype = newResourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_section")
    public SectionCompact newSection;
    public StoryResponse withNewSection(SectionCompact newSection) {
        this.newSection = newSection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_text_value")
    public String newTextValue;
    public StoryResponse withNewTextValue(String newTextValue) {
        this.newTextValue = newTextValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_hearts")
    public Long numHearts;
    public StoryResponse withNumHearts(Long numHearts) {
        this.numHearts = numHearts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_likes")
    public Long numLikes;
    public StoryResponse withNumLikes(Long numLikes) {
        this.numLikes = numLikes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_approval_status")
    public String oldApprovalStatus;
    public StoryResponse withOldApprovalStatus(String oldApprovalStatus) {
        this.oldApprovalStatus = oldApprovalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_dates")
    public StoryResponseDates oldDates;
    public StoryResponse withOldDates(StoryResponseDates oldDates) {
        this.oldDates = oldDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_enum_value")
    public EnumOption oldEnumValue;
    public StoryResponse withOldEnumValue(EnumOption oldEnumValue) {
        this.oldEnumValue = oldEnumValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_multi_enum_values")
    public EnumOption[] oldMultiEnumValues;
    public StoryResponse withOldMultiEnumValues(EnumOption[] oldMultiEnumValues) {
        this.oldMultiEnumValues = oldMultiEnumValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_name")
    public String oldName;
    public StoryResponse withOldName(String oldName) {
        this.oldName = oldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_number_value")
    public Long oldNumberValue;
    public StoryResponse withOldNumberValue(Long oldNumberValue) {
        this.oldNumberValue = oldNumberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_resource_subtype")
    public String oldResourceSubtype;
    public StoryResponse withOldResourceSubtype(String oldResourceSubtype) {
        this.oldResourceSubtype = oldResourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_section")
    public SectionCompact oldSection;
    public StoryResponse withOldSection(SectionCompact oldSection) {
        this.oldSection = oldSection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_text_value")
    public String oldTextValue;
    public StoryResponse withOldTextValue(String oldTextValue) {
        this.oldTextValue = oldTextValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previews")
    public Preview[] previews;
    public StoryResponse withPreviews(Preview[] previews) {
        this.previews = previews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public ProjectCompact project;
    public StoryResponse withProject(ProjectCompact project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public String resourceSubtype;
    public StoryResponse withResourceSubtype(String resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public StoryResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public StoryResponseSourceEnum source;
    public StoryResponse withSource(StoryResponseSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticker_name")
    public StoryResponseStickerNameEnum stickerName;
    public StoryResponse withStickerName(StoryResponseStickerNameEnum stickerName) {
        this.stickerName = stickerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("story")
    public StoryCompact story;
    public StoryResponse withStory(StoryCompact story) {
        this.story = story;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public TagCompact tag;
    public StoryResponse withTag(TagCompact tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public Object target;
    public StoryResponse withTarget(Object target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public TaskCompact task;
    public StoryResponse withTask(TaskCompact task) {
        this.task = task;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public StoryResponse withText(String text) {
        this.text = text;
        return this;
    }
}