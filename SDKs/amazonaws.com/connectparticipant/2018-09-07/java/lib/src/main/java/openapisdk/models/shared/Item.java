package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Item
 * An item - message or event - that has been sent. 
**/
public class Item {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbsoluteTime")
    public String absoluteTime;
    public Item withAbsoluteTime(String absoluteTime) {
        this.absoluteTime = absoluteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attachments")
    public AttachmentItem[] attachments;
    public Item withAttachments(AttachmentItem[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Content")
    public String content;
    public Item withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentType")
    public String contentType;
    public Item withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public Item withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public Item withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParticipantId")
    public String participantId;
    public Item withParticipantId(String participantId) {
        this.participantId = participantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParticipantRole")
    public ParticipantRoleEnum participantRole;
    public Item withParticipantRole(ParticipantRoleEnum participantRole) {
        this.participantRole = participantRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ChatItemTypeEnum type;
    public Item withType(ChatItemTypeEnum type) {
        this.type = type;
        return this;
    }
}