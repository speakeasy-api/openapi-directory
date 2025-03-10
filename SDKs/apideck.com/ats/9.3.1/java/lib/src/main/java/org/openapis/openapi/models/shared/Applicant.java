/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class Applicant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public Address[] addresses;

    public Applicant withAddresses(Address[] addresses) {
        this.addresses = addresses;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anonymized")
    public Boolean anonymized;

    public Applicant withAnonymized(Boolean anonymized) {
        this.anonymized = anonymized;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applications")
    public String[] applications;

    public Applicant withApplications(String[] applications) {
        this.applications = applications;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;

    public Applicant withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    
    /**
     * The date of birth of the person.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("birthday")
    public LocalDate birthday;

    public Applicant withBirthday(LocalDate birthday) {
        this.birthday = birthday;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidential")
    public Boolean confidential;

    public Applicant withConfidential(Boolean confidential) {
        this.confidential = confidential;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinator_id")
    public String coordinatorId;

    public Applicant withCoordinatorId(String coordinatorId) {
        this.coordinatorId = coordinatorId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover_letter")
    public String coverLetter;

    public Applicant withCoverLetter(String coverLetter) {
        this.coverLetter = coverLetter;
        return this;
    }
    
    /**
     * The date and time when the object was created.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;

    public Applicant withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    /**
     * The user who created the object.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;

    public Applicant withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public CustomField[] customFields;

    public Applicant withCustomFields(CustomField[] customFields) {
        this.customFields = customFields;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cv_url")
    public String cvUrl;

    public Applicant withCvUrl(String cvUrl) {
        this.cvUrl = cvUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;

    public Applicant withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    
    /**
     * The time at which the object was deleted.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("deleted_at")
    public OffsetDateTime deletedAt;

    public Applicant withDeletedAt(OffsetDateTime deletedAt) {
        this.deletedAt = deletedAt;
        return this;
    }
    
    /**
     * The user who deleted the object.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted_by")
    public String deletedBy;

    public Applicant withDeletedBy(String deletedBy) {
        this.deletedBy = deletedBy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public Email[] emails;

    public Applicant withEmails(Email[] emails) {
        this.emails = emails;
        return this;
    }
    
    /**
     * The first name of the person.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;

    public Applicant withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public String[] followers;

    public Applicant withFollowers(String[] followers) {
        this.followers = followers;
        return this;
    }
    
    /**
     * Typically a list of previous companies where the contact has worked or schools that the contact has attended
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headline")
    public String headline;

    public Applicant withHeadline(String headline) {
        this.headline = headline;
        return this;
    }
    
    /**
     * A unique identifier for an object.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Applicant withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The initials of the person, usually derived from their first, middle, and last names.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initials")
    public String initials;

    public Applicant withInitials(String initials) {
        this.initials = initials;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_url")
    public String jobUrl;

    public Applicant withJobUrl(String jobUrl) {
        this.jobUrl = jobUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("last_interaction_at")
    public OffsetDateTime lastInteractionAt;

    public Applicant withLastInteractionAt(OffsetDateTime lastInteractionAt) {
        this.lastInteractionAt = lastInteractionAt;
        return this;
    }
    
    /**
     * The last name of the person.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;

    public Applicant withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    
    /**
     * Middle name of the person.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;

    public Applicant withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    
    /**
     * The name of an applicant.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Applicant withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner_id")
    public String ownerId;

    public Applicant withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public PhoneNumber[] phoneNumbers;

    public Applicant withPhoneNumbers(PhoneNumber[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    
    /**
     * The URL of the photo of a person.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photo_url")
    public String photoUrl;

    public Applicant withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
    
    /**
     * The PositionId the applicant applied for.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position_id")
    public String positionId;

    public Applicant withPositionId(String positionId) {
        this.positionId = positionId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_url")
    public String recordUrl;

    public Applicant withRecordUrl(String recordUrl) {
        this.recordUrl = recordUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recruiter_id")
    public String recruiterId;

    public Applicant withRecruiterId(String recruiterId) {
        this.recruiterId = recruiterId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("rejected_at")
    public OffsetDateTime rejectedAt;

    public Applicant withRejectedAt(OffsetDateTime rejectedAt) {
        this.rejectedAt = rejectedAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("social_links")
    public ApplicantSocialLinks[] socialLinks;

    public Applicant withSocialLinks(ApplicantSocialLinks[] socialLinks) {
        this.socialLinks = socialLinks;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_id")
    public String sourceId;

    public Applicant withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourced_by")
    public String sourcedBy;

    public Applicant withSourcedBy(String sourcedBy) {
        this.sourcedBy = sourcedBy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public String[] sources;

    public Applicant withSources(String[] sources) {
        this.sources = sources;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stage_id")
    public String stageId;

    public Applicant withStageId(String stageId) {
        this.stageId = stageId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;

    public Applicant withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    
    /**
     * The job title of the person.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public Applicant withTitle(String title) {
        this.title = title;
        return this;
    }
    
    /**
     * The date and time when the object was last updated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;

    public Applicant withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    /**
     * The user who last updated the object.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_by")
    public String updatedBy;

    public Applicant withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websites")
    public ApplicantWebsites[] websites;

    public Applicant withWebsites(ApplicantWebsites[] websites) {
        this.websites = websites;
        return this;
    }
    
    public Applicant(){}
}
