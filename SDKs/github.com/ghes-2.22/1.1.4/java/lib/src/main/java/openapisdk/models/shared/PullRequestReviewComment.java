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
 * PullRequestReviewComment
 * Pull Request Review Comments are comments on a portion of the Pull Request's diff.
**/
public class PullRequestReviewComment {
    @JsonProperty("_links")
    public PullRequestReviewCommentLinks links;
    public PullRequestReviewComment withLinks(PullRequestReviewCommentLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("author_association")
    public AuthorAssociationEnum authorAssociation;
    public PullRequestReviewComment withAuthorAssociation(AuthorAssociationEnum authorAssociation) {
        this.authorAssociation = authorAssociation;
        return this;
    }
    @JsonProperty("body")
    public String body;
    public PullRequestReviewComment withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_html")
    public String bodyHtml;
    public PullRequestReviewComment withBodyHtml(String bodyHtml) {
        this.bodyHtml = bodyHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_text")
    public String bodyText;
    public PullRequestReviewComment withBodyText(String bodyText) {
        this.bodyText = bodyText;
        return this;
    }
    @JsonProperty("commit_id")
    public String commitId;
    public PullRequestReviewComment withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public PullRequestReviewComment withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("diff_hunk")
    public String diffHunk;
    public PullRequestReviewComment withDiffHunk(String diffHunk) {
        this.diffHunk = diffHunk;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public PullRequestReviewComment withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PullRequestReviewComment withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_reply_to_id")
    public Long inReplyToId;
    public PullRequestReviewComment withInReplyToId(Long inReplyToId) {
        this.inReplyToId = inReplyToId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line")
    public Long line;
    public PullRequestReviewComment withLine(Long line) {
        this.line = line;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public PullRequestReviewComment withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("original_commit_id")
    public String originalCommitId;
    public PullRequestReviewComment withOriginalCommitId(String originalCommitId) {
        this.originalCommitId = originalCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_line")
    public Long originalLine;
    public PullRequestReviewComment withOriginalLine(Long originalLine) {
        this.originalLine = originalLine;
        return this;
    }
    @JsonProperty("original_position")
    public Long originalPosition;
    public PullRequestReviewComment withOriginalPosition(Long originalPosition) {
        this.originalPosition = originalPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_start_line")
    public Long originalStartLine;
    public PullRequestReviewComment withOriginalStartLine(Long originalStartLine) {
        this.originalStartLine = originalStartLine;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public PullRequestReviewComment withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonProperty("position")
    public Long position;
    public PullRequestReviewComment withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonProperty("pull_request_review_id")
    public Long pullRequestReviewId;
    public PullRequestReviewComment withPullRequestReviewId(Long pullRequestReviewId) {
        this.pullRequestReviewId = pullRequestReviewId;
        return this;
    }
    @JsonProperty("pull_request_url")
    public String pullRequestUrl;
    public PullRequestReviewComment withPullRequestUrl(String pullRequestUrl) {
        this.pullRequestUrl = pullRequestUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reactions")
    public ReactionRollup reactions;
    public PullRequestReviewComment withReactions(ReactionRollup reactions) {
        this.reactions = reactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("side")
    public PullRequestReviewCommentSideEnum side;
    public PullRequestReviewComment withSide(PullRequestReviewCommentSideEnum side) {
        this.side = side;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_line")
    public Long startLine;
    public PullRequestReviewComment withStartLine(Long startLine) {
        this.startLine = startLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_side")
    public PullRequestReviewCommentStartSideEnum startSide;
    public PullRequestReviewComment withStartSide(PullRequestReviewCommentStartSideEnum startSide) {
        this.startSide = startSide;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public PullRequestReviewComment withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PullRequestReviewComment withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("user")
    public SimpleUser user;
    public PullRequestReviewComment withUser(SimpleUser user) {
        this.user = user;
        return this;
    }
}