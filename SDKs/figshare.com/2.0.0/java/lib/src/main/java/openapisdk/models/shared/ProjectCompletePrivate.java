package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectCompletePrivate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborators")
    public Collaborator[] collaborators;
    public ProjectCompletePrivate withCollaborators(Collaborator[] collaborators) {
        this.collaborators = collaborators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public ProjectCompletePrivate withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ProjectCompletePrivate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("figshare_url")
    public String figshareUrl;
    public ProjectCompletePrivate withFigshareUrl(String figshareUrl) {
        this.figshareUrl = figshareUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding")
    public String funding;
    public ProjectCompletePrivate withFunding(String funding) {
        this.funding = funding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding_list")
    public FundingInformation[] fundingList;
    public ProjectCompletePrivate withFundingList(FundingInformation[] fundingList) {
        this.fundingList = fundingList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Long groupId;
    public ProjectCompletePrivate withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ProjectCompletePrivate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_date")
    public String modifiedDate;
    public ProjectCompletePrivate withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public ProjectCompletePrivate withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quota")
    public Long quota;
    public ProjectCompletePrivate withQuota(Long quota) {
        this.quota = quota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public ProjectCompletePrivateRoleEnum role;
    public ProjectCompletePrivate withRole(ProjectCompletePrivateRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storage")
    public ProjectCompletePrivateStorageEnum storage;
    public ProjectCompletePrivate withStorage(ProjectCompletePrivateStorageEnum storage) {
        this.storage = storage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ProjectCompletePrivate withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ProjectCompletePrivate withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used_quota")
    public Long usedQuota;
    public ProjectCompletePrivate withUsedQuota(Long usedQuota) {
        this.usedQuota = usedQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used_quota_private")
    public Long usedQuotaPrivate;
    public ProjectCompletePrivate withUsedQuotaPrivate(Long usedQuotaPrivate) {
        this.usedQuotaPrivate = usedQuotaPrivate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used_quota_public")
    public Long usedQuotaPublic;
    public ProjectCompletePrivate withUsedQuotaPublic(Long usedQuotaPublic) {
        this.usedQuotaPublic = usedQuotaPublic;
        return this;
    }
}