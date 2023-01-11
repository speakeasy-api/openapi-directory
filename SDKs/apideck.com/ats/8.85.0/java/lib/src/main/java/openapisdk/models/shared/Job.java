package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Job {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public Address[] addresses;
    public Job withAddresses(Address[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_to_employees")
    public Boolean availableToEmployees;
    public Job withAvailableToEmployees(Boolean availableToEmployees) {
        this.availableToEmployees = availableToEmployees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocks")
    public Object[] blocks;
    public Job withBlocks(Object[] blocks) {
        this.blocks = blocks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branch")
    public JobBranch branch;
    public Job withBranch(JobBranch branch) {
        this.branch = branch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closing")
    public String closing;
    public Job withClosing(String closing) {
        this.closing = closing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closing_date")
    public LocalDate closingDate;
    public Job withClosingDate(LocalDate closingDate) {
        this.closingDate = closingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closing_html")
    public String closingHtml;
    public Job withClosingHtml(String closingHtml) {
        this.closingHtml = closingHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public Job withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidential")
    public Boolean confidential;
    public Job withConfidential(Boolean confidential) {
        this.confidential = confidential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Job withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public Job withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public Job withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department")
    public Department department;
    public Job withDepartment(Department department) {
        this.department = department;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Job withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_html")
    public String descriptionHtml;
    public Job withDescriptionHtml(String descriptionHtml) {
        this.descriptionHtml = descriptionHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_terms")
    public JobEmploymentTermsEnum employmentTerms;
    public Job withEmploymentTerms(JobEmploymentTermsEnum employmentTerms) {
        this.employmentTerms = employmentTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experience")
    public String experience;
    public Job withExperience(String experience) {
        this.experience = experience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public String[] followers;
    public Job withFollowers(String[] followers) {
        this.followers = followers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiring_managers")
    public Object[] hiringManagers;
    public Job withHiringManagers(Object[] hiringManagers) {
        this.hiringManagers = hiringManagers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Job withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_portal_url")
    public String jobPortalUrl;
    public Job withJobPortalUrl(String jobPortalUrl) {
        this.jobPortalUrl = jobPortalUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public Job withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner_id")
    public String ownerId;
    public Job withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("published_at")
    public OffsetDateTime publishedAt;
    public Job withPublishedAt(OffsetDateTime publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_url")
    public String recordUrl;
    public Job withRecordUrl(String recordUrl) {
        this.recordUrl = recordUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recruiters")
    public String[] recruiters;
    public Job withRecruiters(String[] recruiters) {
        this.recruiters = recruiters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote")
    public Boolean remote;
    public Job withRemote(Boolean remote) {
        this.remote = remote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requisition_id")
    public String requisitionId;
    public Job withRequisitionId(String requisitionId) {
        this.requisitionId = requisitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salary")
    public JobSalary salary;
    public Job withSalary(JobSalary salary) {
        this.salary = salary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Long sequence;
    public Job withSequence(Long sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public Job withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobStatusEnum status;
    public Job withStatus(JobStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Job withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Job withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Job withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_by")
    public String updatedBy;
    public Job withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Job withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public JobVisibilityEnum visibility;
    public Job withVisibility(JobVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}