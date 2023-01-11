package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Curation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public Long accountId;
    public Curation withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("article_id")
    public Long articleId;
    public Curation withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigned_to")
    public Long assignedTo;
    public Curation withAssignedTo(Long assignedTo) {
        this.assignedTo = assignedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments_count")
    public Long commentsCount;
    public Curation withCommentsCount(Long commentsCount) {
        this.commentsCount = commentsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public Curation withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Long groupId;
    public Curation withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Curation withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_date")
    public String modifiedDate;
    public Curation withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_date")
    public String reviewDate;
    public Curation withReviewDate(String reviewDate) {
        this.reviewDate = reviewDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CurationStatusEnum status;
    public Curation withStatus(CurationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public Curation withVersion(Long version) {
        this.version = version;
        return this;
    }
}