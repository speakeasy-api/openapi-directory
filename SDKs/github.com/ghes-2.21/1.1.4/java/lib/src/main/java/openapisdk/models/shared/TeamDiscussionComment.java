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
 * TeamDiscussionComment
 * A reply to a discussion within a team.
**/
public class TeamDiscussionComment {
    @JsonProperty("author")
    public TeamDiscussionCommentSimpleUser author;
    public TeamDiscussionComment withAuthor(TeamDiscussionCommentSimpleUser author) {
        this.author = author;
        return this;
    }
    @JsonProperty("body")
    public String body;
    public TeamDiscussionComment withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("body_html")
    public String bodyHtml;
    public TeamDiscussionComment withBodyHtml(String bodyHtml) {
        this.bodyHtml = bodyHtml;
        return this;
    }
    @JsonProperty("body_version")
    public String bodyVersion;
    public TeamDiscussionComment withBodyVersion(String bodyVersion) {
        this.bodyVersion = bodyVersion;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public TeamDiscussionComment withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("discussion_url")
    public String discussionUrl;
    public TeamDiscussionComment withDiscussionUrl(String discussionUrl) {
        this.discussionUrl = discussionUrl;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public TeamDiscussionComment withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("last_edited_at")
    public OffsetDateTime lastEditedAt;
    public TeamDiscussionComment withLastEditedAt(OffsetDateTime lastEditedAt) {
        this.lastEditedAt = lastEditedAt;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public TeamDiscussionComment withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public TeamDiscussionComment withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reactions")
    public ReactionRollup reactions;
    public TeamDiscussionComment withReactions(ReactionRollup reactions) {
        this.reactions = reactions;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public TeamDiscussionComment withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public TeamDiscussionComment withUrl(String url) {
        this.url = url;
        return this;
    }
}