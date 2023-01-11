package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CurationDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public Long accountId;
    public CurationDetail withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("article_id")
    public Long articleId;
    public CurationDetail withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigned_to")
    public Long assignedTo;
    public CurationDetail withAssignedTo(Long assignedTo) {
        this.assignedTo = assignedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments_count")
    public Long commentsCount;
    public CurationDetail withCommentsCount(Long commentsCount) {
        this.commentsCount = commentsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public CurationDetail withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Long groupId;
    public CurationDetail withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CurationDetail withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public ArticleComplete item;
    public CurationDetail withItem(ArticleComplete item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_date")
    public String modifiedDate;
    public CurationDetail withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_date")
    public String reviewDate;
    public CurationDetail withReviewDate(String reviewDate) {
        this.reviewDate = reviewDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CurationDetailStatusEnum status;
    public CurationDetail withStatus(CurationDetailStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public CurationDetail withVersion(Long version) {
        this.version = version;
        return this;
    }
}