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
 * TeamDiscussion
 * A team discussion is a persistent record of a free-form conversation within a team.
**/
public class TeamDiscussion {
    @JsonProperty("author")
    public TeamDiscussionSimpleUser author;
    public TeamDiscussion withAuthor(TeamDiscussionSimpleUser author) {
        this.author = author;
        return this;
    }
    @JsonProperty("body")
    public String body;
    public TeamDiscussion withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("body_html")
    public String bodyHtml;
    public TeamDiscussion withBodyHtml(String bodyHtml) {
        this.bodyHtml = bodyHtml;
        return this;
    }
    @JsonProperty("body_version")
    public String bodyVersion;
    public TeamDiscussion withBodyVersion(String bodyVersion) {
        this.bodyVersion = bodyVersion;
        return this;
    }
    @JsonProperty("comments_count")
    public Long commentsCount;
    public TeamDiscussion withCommentsCount(Long commentsCount) {
        this.commentsCount = commentsCount;
        return this;
    }
    @JsonProperty("comments_url")
    public String commentsUrl;
    public TeamDiscussion withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public TeamDiscussion withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public TeamDiscussion withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("last_edited_at")
    public OffsetDateTime lastEditedAt;
    public TeamDiscussion withLastEditedAt(OffsetDateTime lastEditedAt) {
        this.lastEditedAt = lastEditedAt;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public TeamDiscussion withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public TeamDiscussion withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("pinned")
    public Boolean pinned;
    public TeamDiscussion withPinned(Boolean pinned) {
        this.pinned = pinned;
        return this;
    }
    @JsonProperty("private")
    public Boolean private_;
    public TeamDiscussion withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reactions")
    public ReactionRollup reactions;
    public TeamDiscussion withReactions(ReactionRollup reactions) {
        this.reactions = reactions;
        return this;
    }
    @JsonProperty("team_url")
    public String teamUrl;
    public TeamDiscussion withTeamUrl(String teamUrl) {
        this.teamUrl = teamUrl;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public TeamDiscussion withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public TeamDiscussion withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public TeamDiscussion withUrl(String url) {
        this.url = url;
        return this;
    }
}