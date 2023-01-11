package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Long active;
    public Account withActive(Long active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public Account withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Account withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public Account withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Long groupId;
    public Account withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Account withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution_id")
    public Long institutionId;
    public Account withInstitutionId(Long institutionId) {
        this.institutionId = institutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution_user_id")
    public String institutionUserId;
    public Account withInstitutionUserId(String institutionUserId) {
        this.institutionUserId = institutionUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public Account withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum_file_size")
    public Long maximumFileSize;
    public Account withMaximumFileSize(Long maximumFileSize) {
        this.maximumFileSize = maximumFileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_date")
    public String modifiedDate;
    public Account withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending_quota_request")
    public Boolean pendingQuotaRequest;
    public Account withPendingQuotaRequest(Boolean pendingQuotaRequest) {
        this.pendingQuotaRequest = pendingQuotaRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quota")
    public Long quota;
    public Account withQuota(Long quota) {
        this.quota = quota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used_quota")
    public Long usedQuota;
    public Account withUsedQuota(Long usedQuota) {
        this.usedQuota = usedQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used_quota_private")
    public Long usedQuotaPrivate;
    public Account withUsedQuotaPrivate(Long usedQuotaPrivate) {
        this.usedQuotaPrivate = usedQuotaPrivate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used_quota_public")
    public Long usedQuotaPublic;
    public Account withUsedQuotaPublic(Long usedQuotaPublic) {
        this.usedQuotaPublic = usedQuotaPublic;
        return this;
    }
}